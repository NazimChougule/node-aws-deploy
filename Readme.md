1.  Install AWS CLI -> https://aws.amazon.com/cli/

2.  Check if aws cli is installed -> aws –version

3.  Login to AWS from browser and go to security credentials under My Account dropdown

4.  Go To Access Keys and create new key -> Then click on download key file

5.  Run "aws configure" in cmd to configure aws on system -> Provide all the required information

6.  While configuring, make sure you provide same region as it is in aws console

7.  npm install aws-serverless-express

8.  npm install -g –save-dev serverless (Dev Dependency)

9.  Create lambda.js file in root folder with following code 
    
    ‘use strict’ 
    //This file is AWS Lambda entry point 
    //All your business code (ExpressJS App) should be done in src/app.js
    
    const awsServerlessExpress = require('aws-serverless-express');
    const app = require('./app.js');
    const server = awsServerlessExpress.createServer(app)
    
    module.exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);

10. Create serverless.yml file with following code 
        
        service: expressInAWS # Name of your App
    
        provider:
          name: aws
          runtime: nodejs14.x # Node JS version
          memorySize: 512
          timeout: 15
          stage: development
          region: us-east-1 # AWS region
        
        functions:
          api:
            handler: lambda.handler
            events:
              - http: ANY {proxy+}
              - http: ANY /

11. Change remove app.listen() code and instead write 
    
    module.exports = app;

12. Deploy app using command -> 

    serverless deploy

13. Once deployed, you will get a URL pointing to our lambda function,
    which can be used to make our API calls
