/***
 * API Gateway : 
 * 1)  Resources / student
 *      => Resource /{id}
 *          => Method : DELETE

* 2) Method Request

* 3) Integration Request
 *   Use Lambda Proxy integration : [checked]
 * 
 * Test:
 *  => {id} :  ce5ccef7-7b59-4a72-98cb-737dfd96b554
 * 
 * 

 * 
 *  ===========================================
 * Lambda Function:
 * 1) Add Trigger [API Gateway]
 * 2) Configuration > Permission
 *  =>  Create Role 
 *  => Attach plocies : add [DynamoDB] service
 * 3) in the code below
  Key instead of Item in params


  https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

 */
  const AWS = require('aws-sdk');
  const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
  
  exports.handler = async (event, context, callback) => {
    
      const id = event.pathParameters.id;   
      
      const params = {
          TableName: "students",
          Key: {
              id: id
          }
      }
  
      await deleteStudent(params)
      .then(() =>{
          callback(null, {
              statusCode: 201,
              body: 'successfully deleted!',
              headers: {
                  "Access-Control-Allow-Origin": "*"
              }
          });
      }).catch((err) => {
          console.error(err)
      })
  
  
  };
  
  function deleteStudent(params) {
      console.log('params=>');
      return docClient.delete(params).promise();
  }
  