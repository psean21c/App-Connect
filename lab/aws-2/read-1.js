
/**********************************************
 * API Gateway : 
 *  ===========================================
 * 1)  Resources /student
 *      => Resource /{id}
 *          => Method : GET

 * 2) Method Request

 * 3) Integration Request
 *   Use Lambda Proxy integration : [checked]

 * 4) Test:
 *  => {id} :  ce5ccef7-7b59-4a72-98cb-737dfd96b554
 * 
 * 5) Deploy & Test on Postman
 * https://k3rx4dln3m.execute-api.us-east-1.amazonaws.com/version2/student/8937cbe4-ac56-4f3a-8baa-10abf2b272fa
 * 
 * 
 *  ===========================================
 * Lambda Function:
 *  ===========================================
 * 1) Add Trigger [API Gateway]
 * 
 * 2) Configuration > Permission
 *  =>  Create Role 
 *  => Attach plocies : add [DynamoDB] service
 * 
 * 3) in the code below
  Key instead of Item in params

 */
  const AWS = require('aws-sdk');
  const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"}); 
  
  exports.handler = async (event, context, callback) => {
      
      // console.log('event => ',event)
      const id = event.pathParameters.id;   
      
      let responseBody = "";
      let statusCode = 0;
      
      const params = {
          TableName: "students",
          Key: {
              id: id
          }
      }
  
      try {
          const data = await docClient.get(params).promise();
          responseBody = JSON.stringify(data.Item);
          statusCode = 200;
      } catch (err) {
          responseBody = `Unable to get user data` + err;
          statusCode = 403;
      }
  
      const response = {
          statusCode: statusCode,
          headers: {
              "myHeader": "test"
          },
          body: responseBody
      }
  
    return response;
  };
  
  