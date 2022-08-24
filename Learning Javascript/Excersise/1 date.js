// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();
console.log(year)
var monthlist = ['jan', 'fab', 'mar', 'a', 'm', 'j', 'ju', 'Aug', 'oc'];
var daylist = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday'];
var hour = today.getHours();
console.log(hour)
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = (hour >= 12) ? hour - 12 : hour;

console.log(hour)
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}


console.log(`${hour}${prepand}${minute}:${second},
  ${daylist[day]}${monthlist[month]}`)