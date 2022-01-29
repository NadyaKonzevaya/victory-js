// 1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const userInput = prompt("Какое официальное название JavaScript?")
// let message = "Не знаете? ECMAScript!";

// if(userInput === "ECMAScript") {
//     message = "Верно!";
// }

// alert(message);
// console.log(userInput);
// task2
//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userTime = 253;
// const hours = Math.floor(userTime / 60);
// const minutes = userTime % 60;
// const modifyHours = String(hours).padStart(2, "0");
// const modifyMinutes = String(minutes).padStart(2, "0");

// // console.log(hours);
// // console.log(Number.parseInt(hours));
// // console.log(modifyHours);
// // console.log(modifyMinutes);
// console.log(`${modifyHours}:${modifyMinutes}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     total += i;
// }
//          console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const userLogin = prompt('Просимо вас ввести логін!');
// if (userLogin === 'Admin') {
//   const userPassword = prompt(
//     `Дорогий ${userLogin} просемо вас нарешті ввести пароль!!!`
//   );
//   if (userPassword === 'Я головний!') {
//     console.log('Здрастє, вітаємо вас у нас');
//   } else if (userPassword === null) {
//     console.log('Отменено');
//   } else {
//     console.log('НЕ вірний пароль');
//   }
// } else if (userLogin === null) {
//   console.log('Отменено');
// } else {
//   console.log('{Хто ти? Я тебе не знаю');
// }
// console.log(userLogin);
// switch (userLogin) {
//   case 'Admin':
//     const userPassword = prompt(
//       `Дорогий ${userLogin} просемо вас нарешті ввести пароль!!!`
//     );
//     switch (userPassword) {
//       case 'Я головний!':
//         console.log('Здрастє, вітаємо вас у нас');
//         break;
//       case null:
//         console.log('Отменено');
//         break;
//       default:
//         console.log('НЕ вірний пароль');
//     }
//     break;
//   case null:
//     console.log('Отменено');
//     break;
//   default:
//     console.log('{Хто ти? Я тебе не знаю');
// }

//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

let userInput = prompt("Ввести число");
let total = 0;

while (userInput) {
  const userInputToNumber = Number(userInput);
  if (Number.isNaN(userInputToNumber)) {
    userInput = prompt("Ввести число");
  } else {
    total += Number(userInput);
    userInput = prompt("Ввести число");
  }
}
console.log(`Общая сумма введенных чисел равна ${total}`);
