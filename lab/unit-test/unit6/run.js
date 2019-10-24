// reference
// https://javascript.info/promise-basics


let abc = function() {
    console.log("abc");
}
// let promise = new Promise(function (resolve, reject) {
//     // the function is executed automatically when the promise is constructed
//     console.log("promise");

//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => resolve(abc(),console.log("done")), 1000);
// });

function delay(ms) {
    console.log(ms);
    return new Promise(abc => setTimeout(abc, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));


// question
// https://blog.naver.com/PostView.nhn?blogId=younjae4007&logNo=221633886515&from=search&redirect=Log&widgetTypeCall=true&directAccess=false
showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});

