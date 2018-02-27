const request = require('request');

requestPromiseGet('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((response) => {
    console.log(response.body);
})
.catch((err) => {
    console.err(err)
});

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


requestPromiseGet('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((response) => response.body)
.then((data) => JSON.parse(data))
.then((json) =>{
    console.log(json[0].email);
})
.catch((err) => {
    console.err(err)
});