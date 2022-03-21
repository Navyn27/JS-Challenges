'use strict';

var jHeight = 1.7;
var mHeight = 2.1;
var mMass = 90;
var jMass = 70;

var Jbmi = jMass / jHeight ** 2;

var Mbmi = mMass / mHeight ** 2;

var comparison = Jbmi == Mbmi;

var output = `John's bmi is ${Jbmi}, Marks bmi is ${Mbmi}, the prediction is ${comparison} `;

console.log(output);


