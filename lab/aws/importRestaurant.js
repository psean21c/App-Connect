
/**
 * 
 */

const fs = require('fs');
const AWS = require('aws-sdk');
const table_name = 'Stores';
const FILE_NAME = 'RBI-US.json';

const docClient = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });


/**
 * padStoreId()
 * 
 * pad 0's between prefix (10/91) and id (from json file)
 * id [1740] => 10 + '' + 1740  => 101740
 * id [262]  => 10 + '0' + 262  => 100262
 * id [56]  =>  10 + '00' + 56  => 100056
 */
const padStoreId = (id, country) => {
    const CA = '10';
    const US = '91';
    const maxIdLength = 4;
    let len = id.length;
    let storeId;
    if (len <= 4) {
        if (country === 'CA') storeId = CA + '0'.repeat(maxIdLength - len) + id;
        else storeId = US + '0'.repeat(maxIdLength - len) + id;
    } else if (len > 4) {
        // (the length of id > 4) only exist in US
        if (country === 'US') storeId = US + id.substring(1);
    }
    return storeId;
}

// in typescript
// private static padStoreId(id: string, country: string): string {
//     const prefix = country === 'CA' ? '10' : '91';
//     const storeId = prefix + id.substr(-4).padStart(4, '0');

//     return storeId;
// }
/**
 * createItem()
 * Insert / update item to the Dynomo DB
*/
const createItem = (item) => {

    let name = item.name;
    let address1 = (item.address1 != null) ? item.address1 : null;
    let address2 = (item.address2 != null) ? item.address2 : null;
    let city = (item.city != null) ? item.city.toUpperCase() : null;
    let stateProvince = item.stateProvince.toUpperCase();
    let country = item.country.toUpperCase();
    let postalCode = item.postalCode.toUpperCase();
    let id = padStoreId(item.id, country);

    const params = {
        TableName: table_name,
        Item: {
            id,
            name,
            address1,
            address2,
            city,
            stateProvince,
            country,
            postalCode,
        }
    };

    docClient.put(params, function (err, data) {
        if (err) {
            // console.log('(debug) failed');
        } else {
            // console.log('(debug) inserted', data);
        }
    });
}


/***
 * Main method 
 */
const readFileAsync = () => {
    fs.readFile(FILE_NAME, (error, data) => {
        if (error) {
            console.log('(debug)NOT successful -Async Read!', error);
        } else {
            try {
                const dataJson = JSON.parse(data);
                let count = 0;
                dataJson.forEach(data => {
                    createItem(data);
                    count++;
                });
                console.log('Async Read: successful!', count);

            } catch (error) {
                console.log(error);
            }
        }
    });
};

console.log('Start Importing Restaurant info to Stores table');
readFileAsync();

