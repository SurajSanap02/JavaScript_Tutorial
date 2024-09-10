const score = 400
console.log(score); //output 400

const balance = new Number(100)
console.log (balance); //output = [Number = 100]
console.log(balance.toString().length); // output = 3
console.log(balance.toFixed(2));

const otherNumber =223.88739 //
console.log(otherNumber.toPrecision(3)); //output = 224

const hundreds =100000//this event use to calalute the value
console.log(hundreds.toLocaleString('en-IN'));//output = 10,00,000

//*************maths**************** *//

console.log(Math);

console.log(Math.abs(-4)); //negtive value convert the posstive value //output=4
console.log(Math.round(4.6));////round of the value //output=5
console.log(Math.ceil(4.2));//select the top value //output=5
console.log(Math.floor(4.9));//select the lower value//output=4
console.log(Math.min(8,7,6,5,4,3,2,1)); //select samallest value //output= 1
console.log(Math.max(8,7,6,5,4,3,2,1));//

console.log(Math.random());// random method output maxmimum value of 0 to 1
console.log(Math.floor( Math.random*10) +1);//floor method out is lowest value 

const min= 20
const max = 40
console.log(Math.floor(Math.random() * (max - min+ 1)) + min)//output  value arount max min 20 to max 40  




