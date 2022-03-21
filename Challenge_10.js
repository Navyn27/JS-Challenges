class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return `${this.make} is moving at ${this.speed / 1.6} mph`;
  }
  set speedUS(speedRest) {
    this.speedUs = speedRest * 1.6;
    return this.speedUs;
  }

  showSpeed() {
    console.log(`${this.make} is moving at ${this.speed}`);
  }
}

const carrer = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

class EV {
  constructor(battery, make, speed) {
    this.battery = battery;
    carrer.call(this, make, speed);
  }
}

EV.prototype = Object.create(car.prototype);

EV.chargeBattery = function (chargeTo) {
  this.battery = this.battery + chargeTo;
};

const ford = new car("Ford", 120);

const stevenson = Object.create(car);
console.log(typeof stevenson);

const Audi = {
  sign: "Fancy",
  __proto__: car.prototype,
};

const Tesla = new EV("50GV", "Tesla", 120);

//console.log(Audi.prototype === ford.prototype);

console.log(Tesla);
