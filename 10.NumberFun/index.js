/*
 *parseInt()
 *parseFloat()
 *toFixed()
 */

const num1 = "20";
const num2 = 10;
const result = parseInt(num1) + num2;
console.log(result);

const num3 = 3.14159;
const result2 = parseInt(num3);
console.log(result2);

const num4 = "premikBoy";
console.log(parseInt(num4)); //Nan

const num5 = 3.456;
const num6 = 2.789;
const result3 = (num5 + num6).toFixed(2);
console.log(result3); //result output in string

const num7 = "56.78";
const num8 = "12.34";
const result4 = parseFloat(num7) + parseFloat(num8);
console.log(result4);

const num9 = "10.5678";
console.log(parseFloat(num9).toFixed(1));

const num10 = "5.4321";
console.log(parseFloat(num10).toFixed(1));

const num11 = "42.45689754";
console.log(parseFloat(num11).toFixed(3));
