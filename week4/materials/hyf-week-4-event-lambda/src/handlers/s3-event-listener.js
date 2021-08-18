const AWS = require('aws-sdk');
const s3 = new AWS.S3();

//todo: add https://github.com/C2FO/fast-csv

/**
 * A Lambda function that logs the payload received from S3.
 */
exports.s3JsonLoggerHandler = async (event, context) => {
  event.Records.forEach(record => {
    const params = {
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key
    };
    
    // get csv file and create stream
    const stream = S3.getObject(params).createReadStream();
    
    let parser = csv.fromStream(stream, { headers: true }).on("data", function (data) {
        console.log(data);
    }).on("end", function () {
        console.log('process finished');
    });
  });
};
