'use strict';

const person3 = {

    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    gender: 'male',
    birthYear : 1900,
    job : 'teacher',
    hasDriverslicense : true,
    friends : ['Michael','Peter','Steven'],
    calcAge : function(){
        return 2022 - this.birthYear;
    }
};

const statement = person => {
    
    const license = person.hasDriverslicense == true ? 'has a driver\'s license' : 'doesn\'t have a driver\'s license.';
    const output = `${person['firstName']} is a ${person.calcAge()}-year old ${person.job}, and he ${license}`;

    return output;
}

console.log(statement(person3));