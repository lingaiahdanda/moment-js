const Duration = require("../src/Duration");


let duration = new Duration(4,'days');
duration.add(5, 'days')


console.log("-------------->After adding  to the previous timestamp<--------------");

console.log("Hours",duration.asHours());
console.log("MilliSecons",duration.asMilliseconds());
console.log("Minutes",duration.asMinutes());
console.log("Seconds",duration.asSeconds());
console.log("Days",duration.asDays());
console.log("Weeks",duration.asWeeks());

console.log("--------------->After Subtarcting the timestamp<-------------------")

duration.subtract(2,"days")

console.log("Hours",duration.asHours());
console.log("MilliSecons",duration.asMilliseconds());
console.log("Minutes",duration.asMinutes());
console.log("Seconds",duration.asSeconds());
console.log("Days",duration.asDays());
console.log("Weeks",duration.asWeeks());
