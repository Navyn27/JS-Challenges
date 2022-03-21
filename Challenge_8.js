var temperatures = [17, 21, 23];
var temperature = [12, 5, -5, 0, 4];

const logger = (arr) => {
  var output = "";
  for (var i = 0; i < arr.length; i++) {
    output += `...${arr[i]} degrees Celsius in ${i + 1} days`;
  }
  return output;
};

console.log(logger(temperature));
console.log(logger(temperatures));
