//* conditions

/*

if(condition){
    if body (condition === true)
} else{
    else body (condition === false)
}


*/

if (5 > 30) {
  console.log("1. True condition");
} else {
  console.log("2. False condition");
}

// напиши скрипт, який виведе в консоль слово Positive якщо в константі balance зберігається додатнє число, але якщо в константі balance буде відʼємне число - виведи в консоль слово Negative

const balance = -10;

if (balance > 0) {
  console.log("positive");
} else if (balance < 0) {
  console.log("negative");
} else {
  console.log("balance is zero");
}

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 26;

if (minutes === 0) {
  console.log(`${hours} г.`);
} else {
  console.log(`${hours} г. ${minutes} хв.`);
}

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "aftertomorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 4;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("aftertomorrow");
} else {
  console.log("Date in the future");
}


//* logical operators && boolean coercion

// console.log(true + 1); // 2 - неявне перетворення типу
// console.log(Number(true) + 1); // 2 - явне перетворення типу

// true: any number exept zero, string with any symbol
// false: 0, null, undefined, NaN, ""(empty string)

// console.log(Boolean(5)); // true
// console.log(Boolean(-5)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("")); // false
// console.log(Boolean("false"));  // true
// console.log(Boolean(" "));  // true

//* logical OR (||) - повертає перше значення, яке конвертується у true, якщо такого немає - повертає останнє
//* logical AND (&&) - повертає перше значення, яке конвертується у false, якщо такого немає - повертає останнє
//* logical NOT (!) - змінює логічний тип значення на зворотнє


//* logical NOT (!)

console.log(!true); // false
console.log(!false); // true
console.log(!0); // !false -> true
console.log(!"hello"); // !true -> false
console.log(!""); // !false -> true
console.log(!" "); //  !true -> false

//* logical OR (||) - returns first true

console.log(false || true); // true
console.log(null || false || 0 || 10 || undefined); // 10
// Boolean(null) -> false
// Boolean(0) -> false
// Boolean(10) -> true
console.log(NaN || "" || "false" || true || -5); // "false"
// Boolean(NaN) - false
// Boolean("") - false
// Boolean("false") - true
