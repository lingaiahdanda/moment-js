const Comparator = require('../src/Comparator');
const Moment = require('../src/Moment');

let a = new Moment(new Date(2015,3));
let b = new Moment(new Date(2019, 4, 24));



let comparator = new Comparator(a.momentContainer.moment, b.momentContainer.moment);


console.log("Difference in MilliSeconds",comparator.DiffInMilliSeconds());
console.log("Difference in Seconds",comparator.DiffInSeconds());
console.log("Difference in Minutes",comparator.DiffInMinutes());
console.log("Difference in Hours",comparator.DiffInHours());
console.log("Difference in Days",comparator.DiffInDays());
console.log("Difference in Weeks",comparator.DiffInWeeks());

let comp = comparator.compareTwoDates();
console.log("\nDifference between the given dates is  : "+ comp[1] +" "+comp[2] +"\n");

