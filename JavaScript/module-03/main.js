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

//* push(...values) - додає один або декілька елементів у кінець масиву

const names = ["Alex", "Dima", "Alice", "Anna", "Petro", "Katya"];
names.push("Sergey");
names.push("Diana", "Ivan");
console.log(names);

//* pop() - видаляє ОДИН елемент з КІНЦЯ масиву

names.pop();
names.pop();

console.log(names);

console.clear();

//! Перебір масиву

const friends = ["Alex", "Dima", "Alice", "Anna", "Petro", "Katya"];

console.log("=== LENGTH ===", friends.length);

for (let i = 0; i < friends.length; i += 1) {
  console.log(i, friends[i]);
}

//! for in - перебирає індекси масиву, ми його використовуємо тоді, коли вони нам потрібні

for (const i in friends) {
  console.log(i, friends[i]);
}

//! for of - перебирає значення масиву, ми його використовуємо тоді, коли індекси нам не потрібні

for (const friend of friends) {
  console.log(friend);
}

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

/*
1: 🍎
2: 🍇
3: 🍑
4: 🍌
5: 🍋
*/

for (const i in fruits) {
  console.log(`${Number(i) + 1}: ${fruits[i]}`);
}

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";
const valuesArr = values.split(" ");
const sideA = Number(valuesArr[0]);
const sideB = Number(valuesArr[1]);
const square = sideA * sideB;

console.log(`S = ${square}`);

console.log(valuesArr);
console.log(sideA, sideB);

const arrOfNames = ["Alex", "Dima", "Diana", "Sergiy", "John"];

console.log(arrOfNames);

console.log(arrOfNames[3]);

console.log(arrOfNames.length);

console.log("============");

for (let i = 0; i < arrOfNames.length; i += 1) {
  console.log(i, arrOfNames[i]);
}

console.log("============");
// for in

for (const i in arrOfNames) {
  console.log(i, arrOfNames[i]);
}

console.log("============");
// for of

for (const name of arrOfNames) {
  console.log(name);
}

console.clear();

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbersArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]; // 86

/*
    Алгоритм:

    1. створюємо змінну для результату, куди будемо накопичувати усю суму
    2. запускаємо цикл для перебору кожного елементу масиву чисел for of
    3. перевірка на те, чи є число парним за допомогою if, якщо число ділиться на 2 без остачі - воно парне
    4. Якщо число є парним, то додаємо його до змінної результату (крок 1)
*/

// let sumOfEven = 0;
// for (const number of numbersArr) {
//   console.log(number);
//   if (number % 2 === 0) {
//     sumOfEven += number;
//   }
// }

// console.log(sumOfEven);

// напиши скрипт для знаходження найменшого числа у масиві

//   [5, 9, 10, 33, 2, 77, 1, 99, 31] -> 1
/*
Вхідні дані: масив чисел
Вихідні дані: найменше число

5, 9, 10, 33, 2, 77, 1, 99, 31
min = 5

1. 9 < 5 - false
2. 10 < 5 - false
3. 33 < 5 - false
4. 2 < 5 - true -> min = 2
5. 77 < 2 - false
6. 1 < 2 - true -> min = 1
7. 99 < 1 - false
8. 31 < 1 - false

min = 1


Алгоритм:
    1.  зробити змінну мін, задати їй в якості значення перший елемент масиву 
    2. запутити цикл для перебору масиву
    3. робимо перевірку, порівнюємо значення змінної мін з поточним числом, якщо поточне число менше за наше задане мінімальне - то воно стає новим мінімальним. 
*/

// const array = [5, 9, 10, 33, 2, 77, 1, 99, 31];

// let min = array[0];

// for (const number of array) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(`MIN: ${min}`);


/*
Задача: Підрахунок кількості слів у рядку
Опис:
Користувач вводить рядок, а програма підраховує кількість слів у цьому рядку. Словом вважається будь-яка послідовність символів, розділених пробілами.

> hello, my name is Alex. Nice to meet you! -> 9
> hello world! -> 2
> hi -> 1
*/

/*
Алгоритм 1:

1. Створюємо змінну у якій збережемо рядок
2. Виділяємо слова з речення по пробілу за допомогою існуючого методу в джс split(" ") - поверне масив зі слів
3. отримуємо довжину масиву за допомогою властивості length


Алгоритм 2:
1. Створюємо змінну у якій збережемо рядок
2. створюмо змінну яка буде рахувати кількість слів
3. запускаємо цикл який перебере кожен символ рядку
4. робимо перевірку, якщо поточний символ рядку рівний пробілу, то ми додоаємо одиницю до змінної кількості слів.
*/

//variant 1

// const string = "hello, my name is Alex. Nice to meet you!";

// const words = string.split(" ")

// const wordsAmount = words.length

// console.log(wordsAmount)


// variant 2
const string = "hello, my name is Alex. Nice to meet you!";
