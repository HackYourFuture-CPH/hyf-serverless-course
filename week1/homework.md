# Homework

## How to deliver homework

Open this template repository https://github.com/HackYourFuture-CPH/masterclass-hyf-homework and click on ![image](https://user-images.githubusercontent.com/6642037/115988976-3796da80-a5bc-11eb-9184-554a2218b2ae.png) and then create a copy of this structure on your own GitHub profile with the name `masterclass-hyf-HYF-homework`

Create a PR to add your homework to the respective week folder like you are used to do in the web development course, and if you don't remember how to do hand in homework using Pull Requests, please check here https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md

## Homework exercises for Week #1

For theese assignments, you need to add CLI commands and/or results to the markdown file found [here](https://github.com/HackYourFuture-CPH/hyf-serverless-course/blob/main/week1/materials/homework/assignments.md).

You will need to have setup the AWS CLI credentials to be able to see solve the assignments (see guide [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)).

1. Write the CLI command to list S3 buckets and a link to the corresponding documentation page. How many buckets are prefixed with hyf in the us-east region?
2. Navigate into the UI and login. Then, search for S3 in the search bar, and navigate into the bucket called `products-bucket`. What's the name of the file?

### Additional Exercises:

3. We can use the [presign](https://docs.aws.amazon.com/cli/latest/reference/s3/presign.html) command to create temporary URLs for files in a private bucket. Create a presigned url for **1 hour** for the file you found in assignment 2.
4. The command you discovered in assignment 1 has optional arguments for making it more **human-readable** and **summarizing**. Write the final command with those arguments, and the total size of the bucket.
