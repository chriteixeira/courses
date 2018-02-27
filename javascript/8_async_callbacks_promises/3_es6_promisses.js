const request = require('request');

var result = performRequest();
//console.log(result);

async function performRequest() {
    let response = await requestPromiseGet('https://jsonplaceholder.typicode.com/posts/1/comments');
    let json = JSON.parse(response.body);
    console.log(json[0].email);
}

function requestPromiseGet(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}