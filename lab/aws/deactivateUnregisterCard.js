'use strict';

/**
 * Abstract : Run - Deactivate Unregistered Cards
 *
 * (1) prerequisite
 *    - install npm packages required
 *    - run assume & establish the AWS credential session for the current teminal
 *    - ensure that table_name are matched accordingly in this JS file
 *
 * (2) command to run
 * $ node deactivateUnregisterCard.js
 *
 * (4) reference : Amazon DynamoDB with Javascript
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
 */

const AWS = require('aws-sdk');
const logUpdate = require('log-update');
const fs = require('fs');

const docClient = new AWS.DynamoDB.DocumentClient();

const table_name = 'Cards';

let totalCount = 0;
let pageCount = 0;
let targetItem = 0;
let logFlieName;

const params = {
    TableName: table_name,
    FilterExpression:
        'begins_with(barcode, :loyalty) AND attribute_not_exists(userId) AND cardStatus = :active AND cardType = :physical AND (attribute_not_exists(points) OR points = :zero) AND (attribute_not_exists(totalAccumulatedPoints) OR totalAccumulatedPoints = :zero)',
    ExpressionAttributeValues: {
        ':loyalty': '046',
        ':active': 'Active',
        ':physical': 'Physical',
        ':zero': 0,
    },
};

/**
 * print LogUpdate
 */
function printLogUpdate() {
    const line = '*';
    let report = `\n\n` + line.repeat(70) + `\n\n`;
    report += `${pageCount} pages, ${targetItem} updated out of ${totalCount} items  \n`;
    return report;
}

/**
 * create Log File
 */
function createLogFiles() {
    const currentTime = new Date();
    const getMonth = (currentTime.getMonth() + 1) % 12;
    const timeStamp1 = currentTime.getFullYear() + '-' + getMonth + '-' + currentTime.getDate() + '-';
    const timeStamp2 = currentTime.getHours() + 'h' + currentTime.getMinutes() + 'm' + +currentTime.getSeconds() + 's';

    logFlieName = 'ReportForDeactivatedCards-' + timeStamp1 + timeStamp2 + '.txt';

    const line = '=';
    let title = 'userId'.padEnd(50) + 'shortId'.padEnd(22) + 'barcode'.padEnd(95) + 'success/fail'.padEnd(22) + '\n';
    title +=
        line.repeat(47).padEnd(50) +
        line.repeat(17).padEnd(22) +
        line.repeat(88).padEnd(95) +
        line.repeat(15).padEnd(22) +
        '\n';

    fs.writeFile(logFlieName, title, err => {
        if (err) console.log(err);
    });
}

/**
 * write Log File
 */
function writeLogFile(data) {
    const text = data + '\n';
    fs.appendFile(logFlieName, text, function(err) {
        if (err) console.log(err);
    });
}

function updateCards(item) {
    const barcode = item.barcode;
    const userId = item.userId == null ? 'non-assigned' : item.userId;
    const shortId = item.shortId == null ? 'No-shortId' : item.shortId;

    let textToLogFile = userId.padEnd(50) + shortId.padEnd(22) + item.barcode.toString().padEnd(95);
    const status = 'InActive';
    const inActiveTime = new Date().getTime();

    const params = {
        TableName: table_name,
        Key: { barcode: barcode },
        UpdateExpression: 'set #cardStatus = :cardStatus, #deactivateTime = :deactivateTime ',
        ExpressionAttributeNames: { '#cardStatus': 'cardStatus', '#deactivateTime': 'deactivateTime' },
        ExpressionAttributeValues: { ':cardStatus': status, ':deactivateTime': inActiveTime },
    };

    docClient.update(params, function(err, data) {
        if (err) {
            textToLogFile += 'failed'.padEnd(22);
            writeLogFile(textToLogFile);
        } else {
            textToLogFile += 'success'.padEnd(22);
            writeLogFile(textToLogFile);
        }
    });
}

/***
 * Main method to scan the table
 */
console.log('Start scanning table for the Report');
createLogFiles();
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error('Unable to scan the table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        for (const item of data.Items) {
            // console.log('(debug)',item.barcode);
            updateCards(item);
            targetItem++;
        }

        totalCount += data.Items.length;
        pageCount++;

        logUpdate(printLogUpdate());

        // pagination - continue to work on the next page
        if (data.LastEvaluatedKey) {
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            setTimeout(() => {
                docClient.scan(params, onScan);
            }, 0);
        }
    }
}
