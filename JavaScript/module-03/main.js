//* Arrays
// Структури даних - спеціальна структура яка організовує дані в певному вигляді та надає методи для роботи з цими даними (для доступу, пошуку, видаленню, додаванню і тд.)

// array (масив) - структура даних яка організовує дані в певному порядку, де кожне значення має свій унікальний номер (індекс). За допомогою цього індексу буде відбуватис робота з даними.

// [value1, value2, value3] - 0, 1, 2

const games = ["Minecraft", "PubG", "Roblox", "CS:GO", "Fortnite"];

console.log(games);
console.log(games[0]); // звернення
console.log(games[2]);

games[3] = "Clash Royale"; // перезапис

console.log(games.length); // отримуємо довжину масиву (кількість елементів в масиві)

const lastIndex = games.length - 1; // отримуємо індекс останнього елементу
console.log(lastIndex);
console.log(games[lastIndex]);

//! Array methods

//* join(separator) - збирає масив в рядок, де кожен елемент буде розділено параметром separator, зазвичай це якись символ

console.log(games.join(";\n"));

//* split(splitter) - розбиває рядок на масив по парметру splitter

console.log("HTML, CSS, JS, C++, C#, Python".split(", "));

//* slice(start, end) - повертає копію масиву починаючи з індексу start і закінчуючи індексом end не включно [start, end)

console.log(games);
console.log(games.slice(1, 3));
console.log(games.slice(3, 5));
console.log(games.slice(3));

//* concat(arr1, arr2, ...arrn) - поєднує декілька масивів в один в порядку передачі

const games1 = ["Minecraft", "Pubg"];
const games2 = ["Fortnite", "Clash Royale"];
const games3 = ["CS:GO", "METRO"];

console.log(games1.concat(games2, games3));

//* indexOf(value) - повертає індекс значення value з масиву, якщо такого значення не існує - повертається -1

const numbers = [1, 8, 90, 43, 653, 77, 1, 90, 44, 24];

console.log(numbers);
console.log(numbers.indexOf(90)); // 2
console.log(numbers.indexOf(77)); // 5
console.log(numbers.indexOf(999)); // -1

console.clear();

//* push(...values) - додає один або декілька елементів у кінець масиву

const names = ["Alex", "Dima", "Alice", "Anna", "Petro", "Katya"];
names.push("Sergey");
names.push("Diana", "Ivan");
console.log(names);

//* pop() - видаляє ОДИН елемент з КІНЦЯ масиву

names.pop();
names.pop();

console.log(names);
