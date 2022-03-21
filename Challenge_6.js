'use strict';

const bills = [22,295,176,440,37,105,10,1100,86,52];
var tips = new Array();
var finalBills = new Array();
var bill;
var arrSum = 0;

const calcTip = billArray => {

   const length = billArray.length;

   for (var billIndex = 0; billIndex < length; billIndex++){
     bill = billArray[billIndex];
     tips[billIndex] = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
     finalBills[billIndex] = bill + tips[billIndex];
   }

   var toReturn = {
       bills : billArray,
       tips : tips,
       finalBills : finalBills
   }

   return toReturn;
}

const arrAv = arr => {
  for (var index = 0; index < arr.length ; index++){
     arrSum += arr[index];
  }
  return arrSum;
}

console.log(arrAv(bills));

// This is my best challenge, it has been a lot of fun.