# Week 1 : Topic #3

## Pre-requisites:

Compute
Lambdas/Functions overview
Cron/Timebased functions
Assignments

Something about installing the software or prior knowlegde about a specific topic

## Lesson Plan:

### 1. Compute and serverless?

Serverless compute/computation is the layer that is strictly focusing to executing a given piece of code, using the CPU's. There is no storage , memory or disk layer which can be utilized - other services like S3 would have to be used for that.

Theese restrictions makes a very powerful and simple interface for us to create solutions with, in a wide range of varieties. In the serverless context, we have infinite scalability and fast compute power on top of a great pricing model.

### 2. Lambdas & functions

Lambdas and functions is the cornerstone of serverless compute. Please note that lambdas and functions are the same, they just have different names in our cloud providers.

You can think if a function/lambda as a cloud function, running a given codebase on a given programming environment. .

Cloud functions are small codebases recieving an incoming event/request and outputting a response. They can be used for creating an API, queues, time based jobs, strean handling and custom event handling for other services such as S3.

### 3. Cron/Timebased functions

Our first journey will be going into [cron](https://en.wikipedia.org/wiki/Cron) based lambdas on AWS. We will use [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) to run and develop on them locally, and deploy it on AWS to run the code on a daily bases.

The sam CLI has alot of utility, for all of Lambdas usecases (api, queue, custom events and more), but we will start out simple by creating CRON based tasks (meaning time based events).

After sam has been installed, we will initiate a new project with:

`sam init`

These are the arguments you need to provide:

1. Chose `AWS Quick Start Templates` as template source,
2. Choose `Zip` as package type.
3. Choose `nodejs14.x` as runtime.
4. Type 'hyf'-{your-credentials}-cron-lambda' as the name, e.g `hyf-pds-cron-lambda`.
5. Choose `Quick Start: Scheduled Events` as an app template.

This will create a node boilerplate that we can run with sam by running:

`sam local invoke ScheduledEventLogger`.

### 4. Deploying lambdas with SAM

To deploy a lambda to AWS through SAM, we will need to create what is called a (cloudformation stack)[https://aws.amazon.com/cloudformation/]. Think of stacks as a recipe of cloud resources and their configuration.

First, we build the lambda running `sam build`. Next we can run `sam deploy --guided`. The arguments will need to be as follows:

1. Type 'hyf'-{your-credentials}-cron-lambda' as the stack name, e.g `hyf-pds-cron-lambda`.
2. Choose default region (us-east-1)
3. Confirm IAM role creation

Your lambda is now deployed and you can find it inside both the cloudformation and lambda UI on the AWS console.

### 5. Cloudwatch

This week, we will also begin to use the service called cloudwatch. Cloudwatch is flexible monitoring tool, which provides out of the box monitoring of key metrics for all of our infrastructure hosted on AWS. There is alot of utility in cloudwatch, but we will start off slowly by integrating it into our lambda.

First off, to use it inside our lambda, we need to install the sdk to our lambda by running `npm install aws-sdk`.

The general aws-sdk signature is usually first to define a client and payload. Then, create a request and execute it through the client. For Cloudwatch this looks like the following.

```
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { ListMetricsCommand } from "@aws-sdk/client-cloudwatch";

const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });

var params = {
  Dimensions: [
    {
      Name: 'LogGroupName', /* required */
    },
  ],
  MetricName: 'IncomingLogEvents',
  Namespace: 'AWS/Logs'
};

let request = await cloudwatchClient.listMetrics(params);

try {
  const data = await cloudwatchClient.send(new ListMetricsCommand(params));
  console.log("Success. Metrics:", JSON.stringify(data.Metrics));
  return data;
} catch (err) {
  console.log("Error", err);
}
```

Note that the signature and functionality is almost always the same as the AWS CLI, e.g the `list-metrics` requires the same parameters (command can be found [here](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudwatch/list-metrics.html)).

You can find more node.js examples [here](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cloudwatch-examples.html)

### 6. Class Assignments

1. Create a new lambda through SAM with the node environment.
2. Copy the contents from `week3/materials/index.js` into your lambda and run it locally.
3. Change the cron expression into running daily at 08:00 AM, i.e `0 8 * * *`.
4. Deploy the lambda, but name it `hyf-class-week2-{your-first-name}`.
5. Navigate into cloudformation and find your stack. Write down your ARN id of the stack.
6. Navigate into your lambda on AWS and trigger it manually.
7. Find the SAM command to delete your stack and then delete it.
