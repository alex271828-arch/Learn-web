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