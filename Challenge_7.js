'use strict';

const John = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95 ,
    calcBmi : function(){
      var bmi = this.mass / this.height ** 2;
      return bmi;
    }
};

const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69 ,

    calcBmi : function(){
        var bmi = this.mass / this.height ** 2;
        return bmi;
    }
};

const decision = (person1,person2) => {
    var output;

    if ( person1.calcBmi() === person2.calcBmi() ){
        output = `${person1.firstName} ${person1.lastName} (${person1.calcBmi()}) and ${person2.firstName} ${person2.lastName} (${person2.calcBmi()})have equal BMIs`;    
    }
    else if(person1.calcBmi() > person2.calcBmi()){
        output =  `${person1.firstName} ${person1.lastName}'s BMI (${person1.calcBmi()}) is greater than ${person2.firstName} ${person2.lastName}'s BMI (${person2.calcBmi()})`;
    }
    else if(person2.calcBmi() > person1.calcBmi()){
        output = `${person2.firstName} ${person2.lastName}'s BMI (${person2.calcBmi()}) is greater than ${person1.firstName} ${person1.lastName}'s BMI (${person1.calcBmi()})`;
    }
    else{
        output = "Invalid BMI values for comparison"
    }
    return output ;
} 

console.log(decision(John,Mark));