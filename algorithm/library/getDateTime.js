const fs = require('fs')


// to measure elapsed time for the process
let startTime, endTime;
let logFlieName;

function start() {
    startTime = new Date();
    console.log('migration just started:' + startTime.getDay() + ":" + startTime.getMonth());
    // getMonth() return the number (-1) hehind the current month (i.e) January is 0, February is 1
    const getMonth = (startTime.getMonth() + 1) % 12;
    const timeStamp = startTime.getFullYear() + "-" + getMonth + "-" + startTime.getDate() + "-" + startTime.getHours() + "h" + startTime.getMinutes() + "m" + + startTime.getSeconds() + 's';
    logFlieName = 'log-' + timeStamp + '.txt';
    console.log("startTime:", startTime);
};


start();
console.log(logFlieName);

