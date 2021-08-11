exports.scheduledEventLoggerHandler = async () => {
    let saneString = "Hello, HYF!"
    let wierdString = [...saneString].map(char => {
        return nextChar(char)
    }).join("")

    return wierdString
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}