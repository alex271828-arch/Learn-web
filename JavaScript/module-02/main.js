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
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;
