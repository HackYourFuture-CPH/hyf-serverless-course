# Homework

## How to deliver homework

Open this template repository https://github.com/HackYourFuture-CPH/masterclass-hyf-homework and click on ![image](https://user-images.githubusercontent.com/6642037/115988976-3796da80-a5bc-11eb-9184-554a2218b2ae.png) and then create a copy of this structure on your own GitHub profile with the name `masterclass-hyf-HYF-homework`

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Homework exercises for Week #2

We will begin to improve our application gradually by each week. The starting point for every exercise is found under `materials/homework`.

Part I:

1. Navigate into the folder `week1/homework` where you will find a predifined web app. Install dependencies with `npm install` and build the app with `npm build`.
2. Inside the file `useSubscription` implement the function called `calculateSum`, such that it returns a the price sum of all selected subscriptions.
3. Inside the component `notification`, implement markup for displaying notifications. Feel free to adjust the hook `useNotification` in whatever way you find interesting.

Part II:

For this part, you will need to finish the markup for assignments.

4. Sync your changes to s3 and write down your s3 bucket url.
5. Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.
6. Explain briefly the pricing model for S3?
7. How much would your current website approxiamately cost to host for one year in the current setup?
8. The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the commands needed.

### Additional Exercises:

6. Which events can be triggered by S3 events. Are those events also supported by Azure?
7. What can be done to reduce the pricing for S3 when hosting a large number of files?
