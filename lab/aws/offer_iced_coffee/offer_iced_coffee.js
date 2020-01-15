/**
 * CUS-505 (Offer MGMT, CAN) SMG Incentive $1 Iced Coffee
 * Note: prefix + id(OfferID) must be properly configured before running on PROD
 * 
 * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
 * https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Js.03.html
 */

const AWS = require("aws-sdk");
const crypto = require("crypto");
const fs = require("fs").promises;
const docClient = new AWS.DynamoDB.DocumentClient();

const flieName = "barcodes_offer_icedcoffees.csv";
const table_name = "Cards";

// build identifier
function buildIdentifier(prefix, today, idx) {
  const suffix = [
    today
      .getFullYear()
      .toString()
      .slice(2, 4),
    (today.getMonth() + 1 > 9 ? "" : "0") + (today.getMonth() + 1),
    (today.getDate() + 1 > 9 ? "" : "0") + (today.getDate() + 1)
  ].join("");
  return prefix + idx.toString().padStart(16 - prefix.length, "0") + suffix;
}

// generate full barcode
function generateBarcode(prefix, today, i) {
  const separator = "~";
  const specialFilter = "AE5D";

  return (
    buildIdentifier(prefix, today, i) +
    separator +
    crypto
      .randomBytes(16)
      .toString("hex")
      .toUpperCase() +
    separator +
    crypto
      .randomBytes(7)
      .toString("hex")
      .toUpperCase() +
    specialFilter +
    crypto
      .randomBytes(7)
      .toString("hex")
      .toUpperCase()
  );
}

// Create CSV file
async function createCsvFile() {
  const title = "barcode\n";
  await fs.writeFile(flieName, title);
}

// Append barcode to CSV file
async function writeCsvFile(barcode) {
  await fs.appendFile(flieName, barcode + "\n");
}

// Write barcode to CSV / Cards - table
async function createItem(item) {
  const barcode = item.barcode;
  const cardStatus = item.cardStatus;
  const cardType = item.cardType;
  const offers = item.offers;

  const params = {
    TableName: table_name,
    Item: {
      barcode,
      cardStatus,
      cardType,
      offers
    }
  };

  await writeCsvFile(params.Item.barcode);

  docClient.put(params, function(err) {
    if (err) {
      console.log("(debug) failed");
    }
  });
}

/**
 * Main workflow - generate 50,000 barcodes for $1 iced-coffees.
 */
async function createOffers() {
  await createCsvFile();

  const prefix = "1233";
  const id = "912";
  const cardStatus = "Active";
  const cardType = "Physical";
  const today = new Date();
  const applied = 0;

  const maxIssueBarcodes = 50000;

  for (let i = 1; i <= maxIssueBarcodes; i++) {
    const item = {
      barcode: generateBarcode(prefix, today, i),
      cardStatus,
      cardType,
      offers: {
        id,
        applied
      }
    };
    await createItem(item);
  }
  console.log("50,000 Offer Iced Coffees created !!");
}

createOffers();
