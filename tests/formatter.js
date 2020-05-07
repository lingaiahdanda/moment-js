const Formatter = require('../src/Formatter');
const Container = require('../src/Container');


let formatter= new Formatter(new Container(Date.now(), 0, 'en'), "LLL", 'en'); 
console.log(formatter.formatDateTime());