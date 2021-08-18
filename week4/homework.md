# Homework

## How to deliver homework

Open this template repository https://github.com/HackYourFuture-CPH/masterclass-hyf-homework and click on ![image](https://user-images.githubusercontent.com/6642037/115988976-3796da80-a5bc-11eb-9184-554a2218b2ae.png) and then create a copy of this structure on your own GitHub profile with the name `masterclass-hyf-HYF-homework`

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Homework exercises for Week #4

The Good Green Groceries sales team has once again shown their brilliant creativity by allowing all kind of vendors upload their inventory lists to our S3 buckets. They now want you to scan the uploaded files for specific categories and items within a specific price range. They are also tired of logging into AWS (where they are creating a great deal of havoc!) so they asked if we could kindly post the results in Slack.

Specifically, Good Green Groceries has made an agreement with external providers to upload files containing their inventory on a weekly basis in a public bucket. We only care about the **vegetables** and **fruits** categories, and will scan for the current prices. Given the price is under 10$, we will then publish a notification.

1. Create a new lambda reacting to S3 Object creation events, and copy the event from `week4/materials/assignments/events/custom-upload-event.json` into the root of your lambda.
2. Install the S3 SDK, and copy the contents of `week4/materials/assignments/index.js` into your index.js file.
3. The code you have copied tries to download an S3 event file and parse it as a CSV, based on the event parameters. 
4. Implement the functionality for listing all groceries and fruit categories with the cost of under 10.0$. Also find the maximum and minimum prices of all the valid candidates you just found.
5. Once done, we need to send this to a webhook of the slack channel `?`. The webhook is a post endpoint, with the parameters `{???}`. We will leave it to you to decide how to perform the http requests.
6. Make your lambda publish a SNS with the topic `INVENTORY_SCAN_COMPLETE`, and the objectID as the message body. You will need to add additional IAM permissions (these can be found inside the `week4/materials/assignments/cloudformation.js`).
7. Create a new lambda which listens to the SNS topic `INVENTORY_SCAN_COMPLETE`. Extract the body, and then make the lambda delete the given file. To test this, please use the event under `week4/materials/assignments/events/custom-delete-event.json` for local development.
