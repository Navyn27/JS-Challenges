'use strict';

const avgCalc = (score1,score2,score3) => {
    const avg = (score1+score2+score3)/3;
    return avg;
} 

const checkWinner = (t1,t1score1,t1score2,t1score3,t2,t2score1,t2score2,t2score3) => {
    const avgTeam1 = avgCalc(t1score1,t1score2,t1score3);
    const avgTeam2 = avgCalc(t2score1,t2score2,t2score3);
    
    if(avgTeam1 >= avgTeam2*2){
        return `${t1} win the competition with ${avgTeam1}`;
    }
    else if(avgTeam2 >= avgTeam1*2){
        return `${t2} win the competition with ${avgTeam2}`;
    }
    else{
        return "No team won!";
    }
}

console.log(checkWinner('Dolphins',44,23,71,'Koalas',65,54,49));
console.log(checkWinner('Dolphins',85,54,41,'Koalas',23,34,27));

/* 
push
unshift
pop
shift
indexOf(-1,0,1,2,...)
includes
*/