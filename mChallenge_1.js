'use strict';

const person3 = {

    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037-1991,
    gender: 'male',
    job : 'teacher',
    friends : ['Michael','Peter','Steven']
};

const person2 = {

    firstName : 'William',
    lastName : 'Stupid',
    age : 2037-2021,
    gender: 'male',
    job : 'teacher',
    friends : ['Kiddo','Nick','Steven']
};

const person1 = {

    firstName : 'Iris',
    lastName : 'Ngogs',
    age : 2037-2025,
    gender: 'female',
    job : 'whatever',
    friends : ['Stego','Stecy','Soniah','Honore','Axelle']
};

const informer = person => {

   const gender = person.gender;
   const identifier = gender === 'male' || gender === 'Male' ? 'his' : 'her';
   const output = `${person.firstName} has ${person['friends'].length} friends and ${identifier} best friend is ${person['friends'][0]}`;
    
   return output;
}

console.log(informer(person1));
console.log(informer(person2));
console.log(informer(person3));
