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

console.log(Boolean(0)); // false
console.log(Boolean(-5.4)); // true
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(null)); // false

console.log("5" + 3); // "5" + String(3) = "5" + "3" = "53" - string
console.log("5" - 3); // Number("5") - 3 = 5 - 3 = 2 - number

console.log("h" - 2); // Number("h") - 2 = NaN - 2 = NaN

console.log(!false); // true
console.log(!0); // not false -> true
console.log(!"hello"); // !true -> false
console.log(true || false); // true
console.log(0 || 1 || 5 || false); // 1
console.log("" || 0 || false || "0" || null); // "0"
console.log("" || false || null || undefined || 0); // 0

//* logical AND (&&) - returns first false

console.log(true && false); // false
console.log(5 && true && "0" && 0 && "hello"); // 0
console.log("hello" && 10 && null && " " && false); // null
console.log(10 && true && " " && "0" && -7); // -7

const number = 500;
const rangeStart = 10;
const rangeEnd = 100;

if (number >= rangeStart && number <= rangeEnd) {
  console.log(`Number ${number} is in range [${rangeStart}, ${rangeEnd}]`);
} else {
  console.log(`Number ${number} isn't in range [${rangeStart}, ${rangeEnd}]`);
}

// ================

const sub = "pro"; // "free", "pro", "vip"
const canAccessContent = sub === "pro" || sub === "vip";
console.log("canAccessContent", canAccessContent);

if (canAccessContent) {
  console.log("You're welcome");
} else {
  console.log("Bye bye");
}

console.log(!0); // true
console.log(!"false"); // false
console.log(!NaN); // true

console.log(0 || 1 || true || "hello" || "" || NaN); // 1
console.log(0 || false || "" || NaN || undefined); // undefined

console.log(1 && "h" && "" && null && 4); // ""
console.log(-9 && !null && "false" && true && 4.5); // 4.5

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log("Can open chat?", canOpenChat);

//!
console.clear();

const string = "Hello World!";

//* toLowerCase/toUpperCase - приводить рядок до верхнього або нижнього регістру

console.log(string.toLowerCase());
console.log(string.toUpperCase());

//* trim() - видаляє зайві пробіли на початку та у кінці рядку

console.log("     hello world!         ".trim());

//* indexOf(value) - повертає індекст початку входження підрядка value(індекси починаютьяс з 0). Якщо підрядок не знайдено - повертаємо -1

console.log("hello".indexOf("e")); // 1
console.log("hello world".indexOf("world")); // 6
console.log("hello world".indexOf("x")); // -1

//* includes(value) - перевіряє чи є значення value у рядку, якщо є - повертає true, якщо немає - повертає false

const games = "Roblox, Minecraft, Fortnite, CS:go, Clash od clans, PubG";

console.log(
  "is user play Minecraft?",
  games.toLowerCase().includes("minecraft")
);
console.log("is user play Roblox?", games.toLowerCase().includes("roblox"));
console.log("is user play WOT?", games.toLowerCase().includes("wot"));

//* startsWith(value) - перевіряє чи починається рядок з підрядка value, якщо починається - то повертає тру, якщо ні - повертає фолс

//* endsWith(value) -  перевіряє чи закінчується рядок підрядком value, якщо так - то повертає тру, якщо ні - повертає фолс

const url = "https://google.ua";

console.log("is site secure?", url.startsWith("https"));

console.log("is site ends with com?", url.endsWith("com"));

//* .slice(start, end) - повертає копію підрядка починаючи з індексу start і закінчуючи індексом end, але не включно. [start, end), якщо не передати значення end, то воно буде копіювати до кінця усього рядка.

const msg = "I love JavaScript!";

console.log(msg.slice(2, 6)); // love
console.log(msg.slice(7, -1)); // JavaScript
console.log(msg.slice(7, 11)); // Java

//* пошук спам слів у повідомленні. НАпиши фукнцію яка приймає повідомлення і перевіряє чи є у реченні заборонене слово. У нас буде два заборонених слова: "spam", "sale", Якщо у повідомленні буде хоча б одне з цих двох слів то фукнція повинна повернути фолс, якщо ж спам слів немає - фукнція повертає тру.

function doesMsgContainsSpamWords(message) {
  const blacklistedWord1 = "spam";
  const blacklistedWord2 = "sale";

  message = message.toLowerCase();

  return (
    message.includes(blacklistedWord1) || message.includes(blacklistedWord2)
  );
}

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

console.log(doesMsgContainsSpamWords(string1)); // true
console.log(doesMsgContainsSpamWords(string2)); // true
console.log(doesMsgContainsSpamWords(string3)); // false

console.clear();

//! LOOPS

//* for loop
// for(ініціалізація; умова продовження циклу; пост вираз)

// for(let i = 0; i < 10; i +=1) {
// loop body
// }

console.log("=== With loop ===");
for (let i = 0; i < 10; i += 1) {
  console.log(i, "Hello world!");
}

console.log("=== Without loop ===");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");
