console.log("Hello world!");

// variable
// - let - створює змінну (коробочку в памʼяті компʼютеру у якій можна зберігати дані)

let userName = "Alex";

let userAge = 12;

console.log("Hello", userName);
console.log(userName, "is", userAge, "years old");

userName = "Max";
console.log("My new name is", userName);

// const - це фактично тaкі самі коробки в памʼяті для зберігання даних, але їх не можна змінити (перезаписати)

const apples = 10;

// apples = 15; //! Uncaught TypeError: Assignment to constant variable. - значення константи не може бути змінено, тобто, заборонено змінювати та перезаписувати дані константи.

console.log(userName, "has", apples, "apples");

//* Data types (примітивні типи даних)
/*
? - Number - це числові дані, тобто це будь-які числа (0, -7, 157, 5.378)

? - String - це текстова інформація, тобто, будь-що записане у лапки ("", '', ``) - "Hello", "50"

? - Boolean(bool) - логічний тип даних, який вміє зберігати тільки два значення - правда і неправда, тобто true or false

? - undefined - відсутність значення(не визначено)

? - null - пустота, нульове значення, відсутність посилання на щось
*/

let someValue;

console.log(10); // Number
console.log("10"); // String
console.log(true); // Boolean
console.log(someValue); // undefined - значення не було надано, тобто змінна невизначена

//* typeof - це оператор, який повертає тип даних якогось значення

console.log(typeof false); // boolean
console.log(typeof 10); // number
console.log(typeof "7"); // string

//! ================================

// +, -, *, /, %, **

const a = 11;
const b = 5;

console.log(a + b); // 16
console.log(a - b); // 6
console.log(a * b); // 55
console.log(a / b); // 2.2
console.log(a % b); // 1
console.log(17 % 3); // 2
console.log(2 ** 3); // 8

console.log(100 + 50 - 2 * 5); // 140

// += - комбіновані оператори

let students = 150;
// students = students + 50;
students += 50;

console.log(`Students amount: ${students}`);

// template strings
const firstName = "Rick";
const lastName = "Sanches";
// const fullName =  firstName + " " + lastName  // Rick Sanches
const fullName = `${firstName} ${lastName}`; // Rick Sanches

console.log(fullName);

const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// Cyberdyne Systems has 200 bots in stock

console.log(msg);

//* Coercion
