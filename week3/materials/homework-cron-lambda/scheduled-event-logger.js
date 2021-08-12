// For part II: 
//import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
//import { ListMetricsCommand } from "@aws-sdk/client-cloudwatch";


exports.scheduledEventLoggerHandler = async () => {
    // For part I
    let saneString = "Hello, HYF!"
    let wierdString = [...saneString].map(char => {
        return nextChar(char)
    }).join("")

    return wierdString

    // For part II: 
    // const cloudwatchClient = new CloudWatchClient({ region: "us-east-1" });

    // var params = {
    //     Dimensions: [
    //         {
    //             Name: '?', /* required */
    //         },
    //     ],
    //     MetricName: '?',
    //     Namespace: '?'
    // };

    // let request = await cloudwatchClient.listMetrics(params);

    // try {
    //     const data = await cloudwatchClient.send(new ListMetricsCommand(params));
    //     console.log("Success. Metrics:", JSON.stringify(data.Metrics));
    //     return data;
    // } catch (err) {
    //     console.log("Error", err);
    // }
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}