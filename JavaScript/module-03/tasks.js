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

function max(arr){
    
}

console.log(max([1, 3, 7, 2, 5])); // 7

//! ==============

//* 3 Задача: Пошук елемента в масиві

// Напиши функцію findElement(arr, target), яка приймає масив arr і елемент target, та повертає індекс елемента в масиві або -1, якщо елемент не знайдено.

// console.log(findElement([1, 3, 7, 2, 5], 7)); // 2
// console.log(findElement([1, 3, 7, 2, 5], 4)); // -1

//! ==============

//* 4 Задача: Перевірка на паліндром

// Напиши функцію isPalindrome(str), яка приймає рядок і повертає true, якщо рядок є паліндромом, і false — якщо ні.

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
