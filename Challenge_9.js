const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is currently moving at ${this.speed} kph.`);
};

car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is currently moving at ${this.speed} kph.`);
};

const BMW = new car("BMW", 120);
const Mercedes = new car("Mercedes", 95);

console.log(BMW);
console.log(Mercedes);
BMW.accelerate();
BMW.accelerate();
BMW.brake();
Mercedes.brake();
