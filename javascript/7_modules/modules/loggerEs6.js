var count = 0;

function info(message) {
    console.log(formatMessage(message));
}

function warn(message) {
    console.warn(formatMessage(message));
}

function error(message, err) {
    console.error(formatMessage(message), err);
}

function formatMessage(message) {
    var date = new Date();
    return '[' + (count++) + '][' + date.getHours() + ':' + date.getUTCMinutes() + ':' + date.getSeconds() + ']: ' + message;

}

export default {
    info : info,
    warn : warn,
    error : error
};