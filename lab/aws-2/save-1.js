const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = async (event, context, callback) => {

    const requestId = context.awsRequestId;
    const {firstName, lastName, staff} = JSON.parse(event.body);

    const params = {
        TableName: "students",
        Item: {
            "id": requestId,
            "firstName": firstName,
            "lastName": lastName,
            "staff": staff
        }
    }
    
    //JSON.stringify(data);
    await createStudent(params).then(() =>{
        callback(null, {
            statusCode: 201,
            body: 'successfully saved',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    }).catch((err) => {
        console.error(err)
    })
};

function createStudent(params) {
    return docClient.put(params).promise();
}

