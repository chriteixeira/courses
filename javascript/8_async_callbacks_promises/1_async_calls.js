const request = require('request');

console.log('Starting requests');
request('http://google.com/aaabbcc.png', function (error, response, body) {
    console.log('doodle: ' + response.statusCode);
});

request
    .get('http://google.com/')
    .on('response', function (response) {
        console.log('google: ' + response.statusCode);
    });

console.log('Ending requests');






request('http://google.com/', handleRequest);


function handleRequest(error, response, body){
    console.log('handleRequest: ' + response.statusCode);


    //perform processing
};