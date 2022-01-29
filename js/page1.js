// 1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"


const userInput = prompt("Какое официальное название JavaScript?")
let message = "Не знаете? ECMAScript!";



if(userInput === "ECMAScript") {
    message = "Верно!";
}

alert(message);
console.log(userInput);
