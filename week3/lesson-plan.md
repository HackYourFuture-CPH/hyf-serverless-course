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

After sam has been installed, we will initiate a new project with:
`sam init`
