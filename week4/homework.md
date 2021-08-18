# Homework

## How to deliver homework

Open this template repository https://github.com/HackYourFuture-CPH/masterclass-hyf-homework and click on ![image](https://user-images.githubusercontent.com/6642037/115988976-3796da80-a5bc-11eb-9184-554a2218b2ae.png) and then create a copy of this structure on your own GitHub profile with the name `masterclass-hyf-HYF-homework`

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Homework exercises for Week #4

The Good Green Groceries sales team has once again shown their brilliant creativity by allowing all kind of vendors upload their inventory lists to our S3 buckets. They now want you to scan the uploaded files for specific categories and items within a specific price range.

This week, we will look into inventory management of our app. The ? company has made an agreement with an external provider to upload a file containing their inventory on a weekly basis. We only care about "carrots" category ?, and will scan for the current price.

Given the price is under 10$, we will then publish a notification.

1. Create a new lambda, and copy the events from `week4/materials/assignments/events/` into the root of your lambda.
2. Install the SDK, and copy the contents of `week4/materials/assignments/index.js` into your index.js file.
3. Parse the event object, and find the S3 object id location. You will need to provide this in the next step.
4. The boilerplate for `getInventoryFile` returns a list of objects. Find the object which has the name `??` and it's corresponding price.

### Additional Exercises:

5. Publish a SNS with the topic `INVENTORY_??`. You will need to add additional IAM permissions (these can be found inside the `week4/materials/assignments/cloudformation.js`).
6. Output the inventory list, but only for all items that contains `??`. What is the average price?
7. Sometimes, our inventory partner uploads by accident, removes the file from S3, and then reuploads a new one. Create a new lambda that listens to a delete event, and then publish that to S3 (see `week4/materials/assignments/cloudformation.js`) for a boilerplate. 
