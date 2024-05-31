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

let monke;
console.log(monke);

//* Coercion - перетворення типів даних з одного на інший
// Два види:
// - явне перетворення типів: використання спеціальних функцій для перетворення типу
// - неявне перетворення типів: перетворення типу без участі розробника (під капотом)

// - явне перетворення типів String()

console.log(typeof 5); // number
console.log(typeof "5"); // string
console.log(typeof true); // boolean
console.log(typeof "true"); // string

console.log(typeof String(true)); // string
console.log(String(true)); // "true"
console.log(String(10));

// - неявне перетворення типів

console.log("5" + 3);
// "5"(string) + 3(number) -> "5" + String(3) -> "5" + "3" = "53"

console.log(true + "7"); // "true7"

console.log(1 + 5 + "8"); // 1 + 5 = 6 + "8" = "68"

// console.log("Hello" + " world!"); // concat

console.log(10 - 3 + "9"); // 7 + "9" = String(7) + "9" = "7" + "9" = "79"

//* Number() - функція, яка явно перетворює значення на число, якщо значення перетворити на число неможливо - отримаємо NaN(not a number)

console.log(Number("5")); // string -> number
console.log(Number(true)); // boolean -> number(1)
console.log(Number(false)); // boolean -> number(0)
console.log(Number(null)); // null -> number(0)
console.log(Number(undefined)); // undefined -> number(NaN)
console.log(Number("Alex")); // string -> number(NaN)

console.log("5" * 2); // "5"(string) * 2(number) = Number("5") * 2 = 5 * 2 = 10(number)
console.log("15" - 3); // 12
console.log(5 + true); // 5 + Number(true) = 5 + 1 = 6

//! ========== Оператори порівнянь ==========

console.log(5 > 4); // true
console.log(10 >= 10); // true
console.log(5 < 5); // false
console.log(10 > "7"); // true
console.log("2" > "12"); // true -> 50 > 49

console.log("2".charCodeAt(0)); // 50
console.log("1".charCodeAt(0)); // 49
console.log("a".charCodeAt(0)); // 97
console.log("A".charCodeAt(0)); // 65

// === - оператор суворої рівності. Він повертає тру тоді, коли всі значення одного типу і рівні між собою. Якщо тип даних значень різний - повертається фолс

console.log(5 === 5); // true
console.log(5 === "5"); // number === string - false

console.log("hello" === "hello"); // true
console.log("Hello" === "hello"); // false
console.log(0 === false); // number === boolean - false
console.log(true + 1 === 2); // true + 1 = 1 + 1 = 2
// 2 === 2 -> true

console.log(null === undefined); // false

console.log("13" === 1 + "3"); 
// 1. 1 + "3" = "13"
// 2. "13" === "13" - true
