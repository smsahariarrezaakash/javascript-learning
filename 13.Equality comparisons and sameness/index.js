const iHave = 50;
const friendHave = "50";
console.log(iHave === friendHave);

const text1 = "JavaScript";
const text2 = 'JavaScript';
console.log(text1 === text2); // Both are same text in string. That's why output is true

const num1 = 25;
const num2 = "25";
const check1 = num1 == num2;
const check2 = num1 === num2;
console.log(check1, check2); // == check the data, === check data with data type

const text3 = "apple";
const text4 = "apple";
const check3 = text3 == text4;
const check4 = text3 === text4;
console.log(check3, check4);

const text5 = "TEST";
const text6 = "test";
const check5 = text5 == text6;
const check6 = text5 === text6;
console.log(check5, check6);

const variableX = 15;
const variableY = "20";
const check7 = variableX != variableY;
const check8 = variableX !== variableY;
console.log(check7, check8);

const variableA = hello;
const variableB = "Hello";
const check9 = variableA == variableB;
const check10 = variableA === variableB;
console.log(check9, check10);
