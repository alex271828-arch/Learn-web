//* 1 Задача: Перевірка на парність

// Напиши функцію isEven(number), яка приймає число і повертає true, якщо число парне, і false — якщо непарне.

function isEven(number) {
  return number % 2 === 0;
}

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(133)); // false

//! ==============

//* 2 Задача: Повернення максимального числа з масиву

// Напиши функцію max(arr), яка приймає масив чисел і повертає найбільше число з масиву.

/*
Алгоритм:
1. створити змінну максимального значення та зберегти в неї перший елемент масиву
2. запустити цикл для перебору усіх цифр в масиві
3. порівняємо поточний елемент масиву зі змінною максимального значення (1 крок). Якщо поточна цифра буде більша за максимальну, то вона стане новою максимальною
4. повертаємо максимальне значення
*/

function max(arr) {
  let maxValue = arr[0];
  for (const num of arr) {
    if (maxValue < num) {
      maxValue = num;
    }
  }
  return maxValue;
}

// console.log(max([1, 3, 7, 2, 5])); // 7
// console.log(max([5, 9, 10, 33, 91, 4, 77])); // 91

//! ==============

//* 3 Задача: Пошук елемента в масиві

// Напиши функцію findElement(arr, target), яка приймає масив arr і елемент target, та повертає індекс елемента в масиві або -1, якщо елемент не знайдено.

/*
Алгоритм:
1. запускаємо цикл для перебору елементів масиву
2. робимо перевірку, якщо поточний елемент масиву дорівнює нашому шуканому значенню - повертаємо його індекс
3. якщо цикл закінчився і ми не знайшли індекс, о повертаємо -1
*/

function findElement(arr, target) {
  for (const i in arr) {
    if (target === arr[i]) {
      return Number(i);
    }
  }
  return -1;
}

// console.log(findElement([1, 3, 7, 2, 5], 7)); // 2
// console.log(findElement([1, 3, 7, 2, 5], 4)); // -1

//! ==============

//* 4 Задача: Перевірка на паліндром

// Напиши функцію isPalindrome(str), яка приймає рядок і повертає true, якщо рядок є паліндромом, і false — якщо ні.

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

// "hello" -> "olleh"
// "racecar" -> "racecar"

//! ==============

// let age = 12;
// const name = "Alex";

// console.log(age);
// age = 13;
// // name = "Rick"
// console.log(`hello my name is ${name} I am ${age} years old`);

// const age = 17;
//  Якщо вік менше за нуль або не є числом - вивести в консоль текст -не коректний вік. якщо вік менше за 18, вивести в консоль текст - немає доступу, якщо вік більше за 18 - вивести в консоль текст Вітаю на сайті.

// if (age <= 0 || typeof age !== "number") {
//   console.error("Invalid age");
// } else if (age < 18) {
//   console.error("Access denied");
// } else {
//   console.log("Welcome to the site!");
// }

// 1...10

// console.log("start");
// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// console.log("end");

// виведи всі непарні числа від 1 до 100 (1, 3, 5, 7, 9, 11 ... 99)

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
