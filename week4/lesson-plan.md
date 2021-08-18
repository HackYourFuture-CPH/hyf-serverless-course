# Week 4 : Storage, events and compute.

## Pre-requisites:
- Preperation articles
- Last week assignments

## Lesson Plan:

So far, we have focused on storage and compute in isolation. This week we combine the two through **events**. Many cloud services, serverless or not, emits unique events that can be listened and reacted upon. In software engineering, this is called [event driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture).

So far, we have seen the cron event, useful for scheduled jobs. But a lambda can be invoked in many different ways, depending on the use case (see [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html) for more on lambda invocation)

Keep in mind, that events are not exclusive to cloud services, they exist in many frameworks and technologies outside of the cloud - e.g a MySql or Redis database can also emit events. We will only concern ourselves with events emitted in the AWS cloud, specifically for the Lambda service. 

Examples on events that is serverless could be:

- A scheduled event (i.e a cron event)
- A row is inserted/updated/deleted in a DynamoDB database.
- A lambda is triggered when something enters SQS (a AWS queue service).
- A file is uploaded/created/deleted from a bucket
- A SNS has been published (SNS is an AWS notification service).

... and alot more.

For a complete list of S3 events see (here)[https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html])

### 1. Interfacing with storage

We start off with two storage events: `New object created events` and `Object removal events`. Both will be applied in time to our application. To listen to these events, we will need to create a lambda once again with SAM.

Create a new lambda through the SAM cli init command and select the app-template called `5 - Quick Start: S3`. This will generate a lambda, which is invoked when new objects is created in a specified bucket. Additionally, a folder is created with custom event files. This allows us to debug and run our lambda locally with:

`sam local invoke S3JsonLoggerFunction --event events/event-s3.json`.

### 2. Deploying the lambda

We will deploy this almost the same way as before, except we will need to specifiy a bucket in our deployment step - in this case the bucket to listen to, will be called `hyf-serverless-inventory-lists`.

First, as before, we build our lambda application with `sam build`. Then we can use the `sam deploy --guided` command to deploy our stack to the cloud similar to last week. From here on, each time a new file is uploaded to the bucket `serverless-inventory-lists`, the lambda will be invoked.

### 3. Simple Notification Service

Another way to trigger lambdas is to subscribe them to a custom notification with the AWS service called "Simple Notification Service" (SNS). Each time an SNS is emitted, relevant services listening/subscribed to the notification is then invoked. The code below publishes a SNS event:

```
// code example taken from SO: https://stackoverflow.com/questions/31484868/can-you-publish-a-message-to-an-sns-topic-using-an-aws-lambda-function-backed-by

var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    var eventText = JSON.stringify(event, null, 2);
    console.log("Received event:", eventText);
    var sns = new AWS.SNS();
    var params = {
        Message: eventText,
        Subject: "Test SNS From Lambda",
        TopicArn: "arn:aws:sns:us-west-2:123456789012:test-topic1"
    };
    sns.publish(params, context.done);
};

```

### 4. Permissions and Security
If you look at the Stack overflow post, you will notice the sentence: `You just need to make sure you give the IAM role executing the function access to publish to your topic`. This is a very important aspect of developing cloud infrastructure, where we strive for [Principle pf least privelege](https://en.wikipedia.org/wiki/Principle_of_least_privilege#:~:text=In%20information%20security%2C%20computer%20science,a%20user%2C%20or%20a%20program%2C).

In terms of the lambda above, this means two things:

1. We need to make sure we are allowed to throw the specific notification
2. We need to give our lambda access to throw notifications in general

These security permission and trust relationships between our AWS infrastructure can be specified in many ways (the UI, CLI, SDK and other ways). We will embrace the [infrastrcture as code](https://en.wikipedia.org/wiki/Infrastructure_as_code) principle, i.e we will specifiy it in our cloudformation template. Here is an example of template with a DyanmoDB policy:

```
AWSTemplateFormatVersion: '2010-09-09'
Transform: 'AWS::Serverless-2016-10-31' b
Resources:
  MyFunction:
    Type: 'AWS::Serverless::Function'
    Properties:
      Handler: index.handler
      Runtime: nodejs8.10
      CodeUri: 's3://my-bucket/function.zip'
      Policies:
      # Give DynamoDB Full Access to your Lambda Function
      - AmazonDynamoDBFullAccess
```

See more policy example [here](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-sam-template-permissions/)

### 4. Class assignments

1. Create a lambda similar to the above and verify it runs, i.e a lambda triggered by S3 input events.
2. Create a SNS in the UI. The topic name should be `hyf-{your-credentials}-sns-topic`. Make your lambda publish your newly created SNS.
3. Create a new lambda once again, but this time with the SNS App template. Then, extend the SNS to contain a string as part of the event body. Make the lambda output this body to the console.
4. Find another classmate and have them verify everything looks correct. Have the classmate delete the SNS and 2 lambdas once done. 
