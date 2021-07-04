# Week 1 : Storage, events and compute.

## Pre-requisites:

Something about installing the software or prior knowlegde about a specific topic

Interfacing with storage <br>Emitting events <br> Assignments

## Lesson Plan:

So far, we have focused on storage and compute in isolation. This week we combine the two through **events**. Many cloud services, serverless or not, emits unique events that can be listened and reacted upon.

Keep in mind, that events are not exclusive to cloud services, they exist in many frameworks and technologies outside of the cloud - e.g a MySql or Redis database can also emit events.

Examples on events that is serverless could be:

- An entry is inserted/updated/deleted in a DynamoDB database.
- A lambda is triggered when something enters SQS (a AWS queue service).
- A file is uploaded to a bucket
- A SNS has been published (SNS is an AWS notification service).

... and alot more.

Our main focus is then to have a lambda, i.e serverless compute, and process these events to create additional functionality for our application.

### 1. Interfacing with storage

There is two storage events we would like to focus on: `New object created events` and `Object removal events`. Both will be applied in time to our application. To listen to these events, we will need to create a lambda once again with SAM.

Create a new lambda through the SAM cli init command. This time you want to use the app-template called `5 - Quick Start: S3`. This will generate a lambda, which is invoked when new objects is created in a specified bucket. Additionally, a folder is created with custom event files. This allows us to debug and run our lambda with:

`sam local invoke S3JsonLoggerFunction --event events/event-s3.json`.

For a complete list of S3 events see (here)[https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html])

### 2. Deploying the lambda

We will deploy this almost the same way as before, except we will need to specifiy a bucket in our deployment step - in this case the bucket to listen to, will be called `hyf-subscription-orders`.

First, as before, we build with the command `sam build`. Then we can use the `sam deploy --guided` command to deploy our stack to the cloud. From here on, each time a new subscription has been created, the lambda will be invoked.

The final deploy command will then look like `sam deploy -- ...`.

### 3. Class assignments

Add assignments for how an S3 event triggered lambda could be included to our app.

1. TBA
