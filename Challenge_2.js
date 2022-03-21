'use strict';

var jMass = 720;
var mMass = 100;
var jHeight = 1.7;
var mHeight = 2;
var jBmi = jMass / jHeight ** 2;
var mBmi = mMass / mHeight ** 2;

var conclusion = jBmi > mBmi;

console.log(`the result is ${conclusion}`);

// if(conclusion == false){
//     console.log(`The BMI of Mark (${mBmi}) is greater than that of John (${jBmi})`);
// }
// else{
//     console.log(`The BMI of John (${jBmi}) is greater than that of Mark (${mBmi})`);
// }

switch (conclusion){

case true:
console.log(`The BMI of John (${jBmi}) is greater than that of Mark (${mBmi}`);
break;
case false: 
console.log(`The BMI of Mark (${mBmi}) is greater than that of John (${jBmi})`);
break;
default : 
console.log('Default output');

}