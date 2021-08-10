# Homework

## How to deliver homework

Open this template repository https://github.com/HackYourFuture-CPH/masterclass-hyf-homework and click on ![image](https://user-images.githubusercontent.com/6642037/115988976-3796da80-a5bc-11eb-9184-554a2218b2ae.png) and then create a copy of this structure on your own GitHub profile with the name `masterclass-hyf-HYF-homework`

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Homework exercises for Week #3

This weeks builds on top of your previous exercises, namely your new found web application for HYF subscriptions. We will extend the application by adding a simple cron task, and interfacing with S3 inside of our Lambda.

Part I:
This part brings focus on creating lambdas through SAM. Your job will be to create and implement the relevant changes needed for a lambda deployment. 

Quick recap: 
To recap, two things is needed to deploy: 
1. A zipped collection of your application files - i.e the files runned when the lambda executes
2. A cloudformation template describing the lambda infrastructure - e.g the runtime, when to execute and other configuration. 

To begin with, we have been handed over a broken lambda and will need to fix it ourselves. Once fixed we have fixed it, we will then add functionality for telling us how many visitors we have on our website through AWS Cloudwatch.

1. Navigate into `materials/homework-cron-lambda`, where you will find three files.

```
- scheduled-event-logger.js
- package.json
- template.yml
```

The template.yml is currently not working, inspect the file and make it functional. 

1. Create a new cron based lambda through the SAM environment with a Node environment.
2. Install the AWS SDK to your project.
3. We will need to output the amount of requests going through our backend. This is done through a useful service called cloudwatch. Navigate into cloudwatch and find the namespace called `API` and then the metric called `Count`.
4. Find the relevant functions for interfacing with the cloudwatch through the SDK (you will have to look this up). This function takes a body that takes the following: `{}`.
5. Finally, implement the functionality for retrieving the amount of requests for our backend and return it in the lambda function.

### Additional Exercises:

5. Implement functionality for listing additional stats. What
6.
7.
8.
9.
