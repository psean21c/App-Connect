'use strict';

/** 
 * Abstract : Run Parity-Report
 * 
 * (1) prerequisite
 *    - install npm packages required
 *    - run assume-command to establish the AWS credential session for the current teminal
 *    - ensure that (1) In this JS file: table_name are matched accordingly
 * 
 * (2) command to run
 * $ node run-parity-report.js
 * 
 * 
*/

const AWS = require('aws-sdk');
const logUpdate = require('log-update');
const convert = require('xml-js');

const docClient = new AWS.DynamoDB.DocumentClient();

// const table_name = 'LoyaltyAudit-Loyalty-l6xi9uhef2'; // prod
const table_name = 'LoyaltyAudit-Loyalty-rzu020tlfi'; // sandbox
// const table_name = 'LoyaltyAudit-SPark'; // spark, simon's table

const params = {
    TableName: table_name,
    // FilterExpression: 'identical = :identical', // spark
    // ExpressionAttributeValues: { ':identical': true }
};

const options = { compact: true };

const p1Validate = 'coupon-api/p1/validate';
const p1 = 'coupon-api/p1';

const pxFields = ['CardId', 'GuestId'];
const pxDiscountsFields = ['plu', 'amount', 'discounted_plu'];
const pxLoyaltyStatusFields = ['NumberOfTransactionsNeeded', 'AvailableRedemptions', 'NumberOfTransactionsInTimePeriod'];

const stats = {};
let totalCount = 0;
let pageCount = 0;
let failCount = 0;

const EP_ISSUEREWARD = "/support/issuereward";
const EP_ISSUEVISIT = "/support/issuevisit";
const EP_GETCARDLIST = "/user/getcardlist";
const EP_GETTRANSACT = "/user/gettransactions";


/**
 * 
 */
function handleSpecialCases(endpoint, pxEngine, dynamics, stat, item) {

    const same_results = "** same results **";
    const length_trans = "** length of transactions **";

    try {

        // issueReward / issueVisit
        if (endpoint == EP_ISSUEREWARD || endpoint == EP_ISSUEVISIT ) {
            stat[same_results] = stat[same_results] ? stat[same_results] + 1 : 1;
            return;
        }

        // getTransactions
        if(endpoint == EP_GETTRANSACT && dynamics.transactions) { 

            if( dynamics.transactions.length == pxEngine.transactions.length){
                stat[length_trans] = stat[length_trans] ? stat[length_trans] + 1 : 1;
            }   

            const dy = dynamics.transactions[0];
            const px = pxEngine.transactions[0];

            for (const d in dy) {
                for(const p in px) {
                    // console.log("(debug) p=",p, ",px[0]=", px[p], ",d=",d, ",dy=", dy[d]);
                    if(dy[d]==px[p]) stat[d] = stat[d] ? stat[d] + 1 : 1;
                    
                }
            }
        }

        // When there is an errorCode in dynamics' payload 
        if (dynamics == undefined || dynamics.errors) {
            stat._errorCount++;
            return;
        }

    } catch(err) {

    }
}

/**
 * 
 */
function compareFields(endpoint, px, dy, fields, stat, item) {

    const array_length = "** length of array matched ** ";
    const not_found = 'NOT-FOUND';

    try {
        // handleSpecialCases(endpoint, dy, stat);
        handleSpecialCases(endpoint,px, dy, stat, item);

        // Different endpoint, different structure of JSON payload
        for (const f of fields) {
            let txtDY = "";
            let txtPX = "";
            if ((endpoint == p1 || endpoint == p1Validate) && (dy[f] && px[f])) {
                txtPX = px[f]._text;
                txtDY = dy[f]._text;
            } else if (endpoint == EP_GETCARDLIST) {
                txtPX = px[0][f];
                txtDY = dy[0][f];
            } else {
                txtPX = px[f];
                txtDY = dy[f];
            }

            const pxValue = (px && txtPX) ? txtPX : not_found;
            const dyValue = (dy && txtDY) ? txtDY : not_found;

            if (pxValue === dyValue && (dyValue != not_found)) 
                stat[f] = stat[f] ? stat[f] + 1 : 1;
            else stat[f] = stat[f] ? stat[f] + 0 : 0;
        }

        if (dy.length != undefined && dy.length === px.length)
            stat[array_length] = stat[array_length] ? stat[array_length] + 1 : 1;

    } catch (err) {

    }
}

/**
 * argument:
 * <case-1> dy = [{1},{2},{3}]
 * <case-2> dy =  {1}
 * 
 * return:
 * fields = {1}
 */
function getFields(dy) {

    let fields = [];
    if (dy.length >= 1) for (const d in dy[0]) fields.push(d);
    else for (const d in dy) fields.push(d);
    return fields;

}

/**
 * 
 */
function compareEndpoint(item) {

    const endpoint = item.endpoint;
    if (!stats[endpoint]) {
        stats[endpoint] = { _count: 0, _successCount: 0, _errorCount: 0, _matchedError: 0 };
    }
    const stat = stats[endpoint];
    stat._count++;

    try {
        let dyResponse = "";
        let pxResponse = "";
        let fields = "";

        // console.log("\compareEndpoint-1,item=", item, ",item.dynamics=" ,item.dynamics);
        if (item.dynamics) {
            dyResponse = JSON.parse(item.dynamics);
            pxResponse = JSON.parse(item.pxEngine);
            fields = getFields(dyResponse);
        }

        // console.log("\compareEndpoint-2");
        stat._successCount++;
        // compareFields(endpoint, pxResponse, dyResponse, fields, stat);
        compareFields(endpoint, pxResponse, dyResponse, fields, stat, item);

    } catch (err) {
        failCount++;
        // console.log("(debug) compareEndpoint <error>", err, "\n<stats>", stats);

    }
}


/***
 * 
 */
async function compareP1(item) {
    const endpoint = item.endpoint || p1;

    if (!stats[endpoint]) {
        stats[endpoint] = { _count: 0, _successCount: 0, _errorCount: 0, _matchedError: 0 };
    }
    const stat = stats[endpoint];
    stat._count++;

    try {
        const dyResponse = convert.xml2js(item.dynamics, options).coupon_response;
        const pxResponse = convert.xml2js(item.pxEngine, options).coupon_response;

        if (dyResponse.errors) {
            let dyErrorCode = dyResponse.errors.error._text;
            let pxErrorCode = pxResponse.errors ? pxResponse.errors.error._text : 'NO-ERROR';
            stat._errorCount++;
            if (dyErrorCode === pxErrorCode) stat._matchedError++;
            return;
        }

        stat._successCount++;
        // compareFields(endpoint, pxResponse, dyResponse, pxFields, stat);
        compareFields(endpoint, pxResponse, dyResponse, pxFields, stat, item);

        const pxDiscounts = pxResponse.discounts;
        const dyDiscounts = dyResponse.discounts;
        // compareFields(endpoint, pxDiscounts, dyDiscounts, pxDiscountsFields, stat);
        compareFields(endpoint, pxDiscounts, dyDiscounts, pxDiscountsFields, stat, item);

        const pxLoyaltyStatus = pxResponse.LoyaltyStatus;
        const dyLoyaltyStatus = dyResponse.LoyaltyStatus;
        // compareFields(endpoint, pxLoyaltyStatus, dyLoyaltyStatus, pxLoyaltyStatusFields, stat);
        compareFields(endpoint, pxLoyaltyStatus, dyLoyaltyStatus, pxLoyaltyStatusFields, stat, item);

    } catch (err) {
        failCount++;
        // console.log("(debug) compareEndpoint <error>", err, "\n<stats>", stats);
    }
}

/**
 * Print for Parity Report
 */
function printMasterReport() {
    let report = `\n\n${pageCount} pages, ${totalCount} items processed, ${failCount} failed to process\n`;
    for (const endpoint in stats) {
        report += generateEndpointReport(endpoint, stats[endpoint]);
    }
    logUpdate(report);
}

/**
 * 
 */
function generateEndpointReport(endpoint, stat) {
    // handle the case : 0/0 => NaN
    let errorRate = (stat._errorCount === 0) ? stat._errorCount.toFixed(2).padStart(10) : (stat._matchedError / stat._errorCount * 100).toFixed(2).padStart(10);

    let report = `/***********************************************************************
${endpoint.padEnd(40)} : Number of Calls ${stat._count}
 Number of Success Responses: ${stat._successCount}`;
    for (const k in stat) {
        if (!k.startsWith('_')) {
            report += `\n[ ${k.padEnd(42)} ] ${stat[k].toString().padStart(10)} ${(stat[k] / stat._successCount * 100).toFixed(2).padStart(10)} %`;
        }
    }
    report += `
 Number of Error Responses: ${stat._errorCount}
[ ${'Error'.padEnd(42)} ] ${stat._matchedError.toString().padStart(10)} ${errorRate} %
***********************************************************************/
`;
    return report;
}

/***
 * Main method to scan the table
 */
console.log("Start scanning table for the Parity Report");
docClient.scan(params, onScan);

function onScan(err, data) {

    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {

        for (const item of data.Items) {
            const endpoint = item.endpoint || p1;
            if (endpoint === p1Validate || endpoint === p1) {
                compareP1(item);
                process.stdout.write('.');
            } else {
                compareEndpoint(item);
            }
        }

        totalCount += data.Items.length;
        pageCount++;

        printMasterReport();

        // pagination - continue to work on the next page
        if (data.LastEvaluatedKey) {
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            setTimeout(() => { docClient.scan(params, onScan); }, 0);
        }
    }
}