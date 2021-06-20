# Week 1 : Storage

## Pre-requisites:

Exercises from week 1 / configured credentials for AWS.

## Lesson Plan:

### 1. Storage overview

Cloud storage is a useful and fundemental offering from cloud vendors with great flexibility for creating serverless applications (among other things). We can use it to store files/objects in given "buckets". This includes serving a static website.

Cloud storage can obviously also be used to store large files (there is no limit to storage, so we have infinite scalability). We can likewise easily move, transform and procces these files by other jobs/services.

S3 can likewise trigger events on file actions, e.g on file upload or file deletion. Files can also contain specific security rules for access.

### 2. Static web hosting

Start of by creating a simple react app with the create-react-app utility, i.e

`npm create-react-app my-bike-shop`

Then compile the app by execyting `npm run build`. This will create the files for the websites we need to upload to S3.

To upload the files, we first need a bucket by using the [create-bucket](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/create-bucket.html) command.

`aws s3 create-bucket --bucket my-bucket --region us-east-1`

Then we leverage the sync command, to sync our fresh build files to the bucket.

`aws s3 sync ./build s3://my-bucket`

Finally, we enable web hosting

`aws s3 website s3://my-bucket/ --index-document index.html --error-document error.html`

### 3. Class Assignments

1. Perform the above steps on your own website. Don't touch any react code yet, but just upload the contents.
2. Navigate into the UI and find your bucket. What is the url, and what are is the bucket policy?
3. Make a change to your website and reflect the changes to your bucket.
4. Write a few reasons on why cloud storage is serverless.
