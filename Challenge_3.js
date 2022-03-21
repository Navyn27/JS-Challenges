'use strict';

var koalasFirstScore = 90 ;
var koalasSecondScore = 95 ; 
var koalasThirdScore = 120 ; 
var koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3 ;

var dolphinsFirstScore = 96 ;
var dolphinsSecondScore = 108 ; 
var dolphinsThirdScore = 103 ; 
var dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3

if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
  console.log(`🏆 The Koalas with ${koalasAverageScore} win the trophy 🏆`);
}
else if(koalasAverageScore < dolphinsAverageScore && dolphinsAverageScore >= 100){
    console.log(`🏆 The Dolphins with ${dolphinsAverageScore} win the trophy 🏆`);
}
else if(koalasAverageScore == dolphinsAverageScore && koalasAverageScore >= 100){
    console.log("A draw");
}
else{
    console.log("All the teams are loosers");
}

console.log(`${koalasAverageScore} , ${dolphinsAverageScore}`);
