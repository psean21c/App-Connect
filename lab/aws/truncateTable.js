'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const table_name = 'Stores';
let totalCount = 0;
let pageCount = 0;
let targetItem = 0;

const params = {
    TableName: table_name,
};


function deleteCards(item) {
    const id = item.id;

    const params = {
        TableName: table_name,
        Key: { id: id }
    };

    docClient.delete(params, function(err, data) {
        if (err) {
            console.log('err', err);
        }
    });
}

/***
 * Main method to scan the table
 */
console.log('Start scanning table for the Report');
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error('Unable to scan the table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        for (const item of data.Items) {
            deleteCards(item);
            targetItem++;
        }

        totalCount += data.Items.length;
        pageCount++;

        // pagination - continue to work on the next page
        if (data.LastEvaluatedKey) {
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            setTimeout(() => {
                docClient.scan(params, onScan);
            }, 0);
        }
    }
}
