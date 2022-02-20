//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа
// function min(a, b) {
//   console.log(typeof a);
//   console.log(typeof b);
//   if (typeof a !== "number" || typeof b !== "number") {
//     return " Введите чмсло";
//   }
//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// console.log(min(2, "heelo"));

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
// const numbers = [22, 5, 35, 56, 12, 24, 7, 80, 2];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     console.log('не масив');
//     return
//   };
//   let minNum1 = numbers[0];
//   let minNum2 = numbers[0];
//   for (const num of numbers) {
//     if (num < minNum1) {
//       console.log( `minNum1: ${minNum1}, minNum2: ${minNum2}`);
//       minNum2 = minNum1;
//       minNum1 = num;
//      };
//   };
//   console.log(minNum1, minNum2);
// }

// findSmallerNumber(numbers);

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg !== 'number') {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return total / count;
// }

// console.log(caculculateAverage(10, 15, 20, 'f', 'c'));

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';

// const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon'];
// function findTheColor(colors, name) {
//   const isInArrey = colors.includes(name);
//   document.body.style.background = isInArrey ? name : 'red';
//   if (!isInArrey) {
//     console.error('Такой цвет не найден');
//   }
//   // if (isInArrey) {
//   //   document.body.style.background = name;
//   // } else {
//   //   document.body.style.background = 'red';
//   //   console.error('Такой цвет не найден');
//   // }
// }

// findTheColor(colors, 'fuchsia');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // Инициализация узлов
// const changeBodyColor = document.querySelector('body');
// const btnChange = document.querySelector('.change-color');
// const outputColor = document.querySelector('.color');

// // Слушатель
// btnChange.addEventListener('click', () => {
//   outputColor.textContent = getRandomHexColor();
//   changeBodyColor.style.backgroundColor = outputColor.textContent;
// });


// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //нарцис  'Jhon'

// function findNarsic(people) {
//     for (const friend of people) {
//         if(friend.know.length === 0) {
//             return findFriends(friend.name, people);
//         };
//     }
//     console.log("Нарцисс не найден");

// }

// function findFriends(narsicName, people) {
//     for (const friend of people) {
//         if (friend.name === narsicName) {
//             continue;
//         }
//         if(!friend.know.includes(narsicName)) {
//            return console.log("Нарцисс не найден");
//         //    return;
//         };
//     }

//     console.log("нарцисс", narsicName);
// }





// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'



// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса



// const people4 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'

// findNarsic(people4);

//Проверка на палиндром
//Лёша на полке клопа нашёл
//А роза упала на лапу Азора
// function isPalindrom(string) {
//   let stringLowerCase = string.toLowerCase().replaceAll(' ', '');
//   // console.log(stringLowerCase);
//   const array = stringLowerCase.split('').reverse();
//   // console.log(array);
//   const stringReverse = array.join('');
//   console.log(stringReverse === stringLowerCase);
// }
// isPalindrom('А роза упала на лапу Азора');

// [5,5,5,7,7,7]

// function backTobegin(array) {
//  for (let i = 0; i < array.length/2; i +=1){
//  let temp = array[i];
//  array[i] = array[array.length - 1 - i];
//  array[array.length - 1 - i] = temp;
//  }
//  console.log(array);
// }
// backTobegin([5,5,5,8,7,7,7])



// Пользователь вводит многозначное число через prompt.
//  Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента
//   и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится
//   число 55639217, то на выход должно быть 5:563:921:7.

function colonOdd(num) {
}
// Нужно созадать путой масив
// в новый массив присвоить первый элемент строки  
// тогда перебераем строку и проверить элементы на четность 
// если четное добавляем двоеточие , если нет то не добавляем



// return Новый массив.join
