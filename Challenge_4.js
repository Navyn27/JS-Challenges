'use strict';

var bill = 275;
var tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
var final = bill + tip;
console.log(`For the bill of ${bill}, the tip is ${tip} and the final bill is ${final}`);

bill = 430;
console.log(`For the bill of ${bill}, the tip is ${tip} and the final bill is ${final}`);

bill = 40;
console.log(`For the bill of ${bill}, the tip is ${tip} and the final bill is ${final}`);