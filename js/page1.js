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

const userTime = 253;
const hours = Math.floor(userTime / 60);
const minutes = userTime % 60;
const modifyHours = String(hours).padStart(2, "0");
const modifyMinutes = String(minutes).padStart(2, "0");


// console.log(hours);
// console.log(Number.parseInt(hours));
// console.log(modifyHours);
// console.log(modifyMinutes);
console.log(`${modifyHours}:${modifyMinutes}`);
