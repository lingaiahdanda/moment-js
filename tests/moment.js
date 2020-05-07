const Moment = require('../src/Moment');

let moment = new Moment("2014 2 24T2:18:25 pm", 'YYYY M DTh:m:s a');


let c = new Moment("March 12 2014", 'MMMM D Y');


console.log("-------Formatting-----");

console.log(moment.Format("YYYY MMMM D"));



// console.log("-------Querying--------");

let a = new Moment("August 12 2015", 'MMMM D Y');
let b = new Moment("January 12 2019", 'MMMM D Y');

// console.log(a.from(b)=="Equal" ? "They are Equal": a.from(b));
console.log(a.fromNow());
// console.log(a.to(b));
// console.log(a.isBefore(b));
// console.log(a.isAfter(b));
console.log(a.isLeapYear());
// console.log(a.isBetween(b,c));


// console.log("-------Displaying----------");

// console.log("2014 2 24T2:18:25 pm");

// // console.log(moment.asString())
// // console.log(moment.toObject())
// // console.log(moment.toISOString())
// console.log(moment.toJSON())
// // console.log(moment.toArray())
// // console.log(moment.asJavaScriptDate())


