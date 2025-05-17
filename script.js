

// N1

// let number = 42;
//let string = "Hello, world!"; 
//let boolean = true; 
//let emptyValue = null; 
// let undefinedValue;

// console.log(typeof number); 
// console.log(typeof string);
// console.log(typeof boolean); 
// console.log(typeof emptyValue);
// console.log(typeof undefinedValue);

// N2

//if (askName >= 18) {
  //  alert("Добро пожаловать!");
//} else {
  //  alert("рано ещё иди учись!");
//}



// N3

//let userName = prompt("введите имя");
//alert(userName.toLowerCase());

// N5

//let aboutMe = {
   // name: "Nazarbek",
   // age: 12,
   // favoriteColor: "blue"
//};

//alert(`Name: ${aboutMe.name}, Age: ${aboutMe.age}, Favorite Color: ${aboutMe.favoriteColor}`);


// N6

//let favoriteFruits = ["olma", "banan", "uzum"];

//favoriteFruits.forEach(fruit => {
  //  alert(fruit);
//});

// N7


//for (let i = 1; i <= 5; i++) {
  //  console.log(i);
//}

// N8


//if (confirm("Siz buni o'chirmoqchimisiz?")) {
  //  alert("O'chirildi!");
//} else {
  //  alert("Bekor qilindi!");
//}

// N9


//let favoriteAnimal = prompt("Sizning sevimli hayvoningiz nima?");
//alert(favoriteAnimal.toUpperCase());

// N10

// const num1 = +prompt('первое число')
// const num2 = +prompt('второе число')
// const num3 = +prompt('третье число')
// alert (num1 + num2 + num3)


// N4
//let userInput = prompt("Iltimos, bo'shliqlar bilan qator kiriting:");
//alert(userInput.trim());

//console.log(userInput.trim());


// 1. Вывести каждый элемент массива в консоль
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(fruit => console.log(fruit));


// 2. Вывести длину каждого слова в массиве
// const words = ['hi', 'hello', 'world'];
// words.forEach(word => console.log(word.length));


// 3. Прибавить 10 к каждому числу и вывести результат
// const numbers = [5, 10, 15];
// numbers.forEach(number => console.log(number + 10));


// 4. Вывести индекс и значение каждого элемента
// const names = ['Anna', 'Bob', 'Carl'];
// names.forEach((name, index) => console.log(`Индекс: ${index}, Значение: ${name}`));


// 5. Собрать сумму всех чисел
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//  const arr = [4, 7, 2, 6]
//  const arr2 = [ 'X','O','J','I','K',]

//  console.log(arr2.join(''))



// for (let i = 1; i <= 6; i++) {
//   const heading = document.createElement(`h${i}`);
//   heading.textContent = `SALAM ${i}`;
//   heading.style.color = `hsl(${i * 60}, 70%, 50%)`; 
//   heading.style.fontFamily = 'Arial, sans-serif';
//   heading.style.margin = '10px 0';
//   document.body.append(heading);
// }
 

// const ism = prompt('ismingizni kiriting');
// const familia = prompt('familia kiriting');
// const yosh = prompt('yosh kiriting');
// const kattaKichik = prompt('1 yoki 2 kirgizing');


// const div = document.createElement('div');
// div.classList.add('w-[800px]', 'rounded-[30px]', 'p-[50px]', 'bg-[black]')
// document.body.append(div);

// const h1 = document.createElement('h1');
// h1.textContent = `1. Ism ${ism}`;
// h1.classList.add('text-[white]', 'text-[40px]');

// const h2 = document.createElement('h1');
// h2.textContent = `2. familia ${familia}`;
// h2.classList.add('text-[white]', 'text-[40px]');

// const h3 = document.createElement('h1');
// h3.textContent = `3. yosh ${yosh}`;
// h3.classList.add('text-[white]', 'text-[40px]');
// div.append(h1, h2, h3)

// const ism = prompt('Введите имя');
// const familia = prompt('Введите фамилию');
// const yosh = prompt('Введите возраст');
// const kattaKichik = prompt('Выберите:\n1 - чтобы всё начиналось с большой буквы\n2 - чтобы всё начиналось с маленькой буквы');

// function formatText(text, mode) {
//   if (mode === '1') {
//     return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//   } else if (mode === '2') {
//     return text.toLowerCase();
//   } else {
//     return text;
//   }
// }

// const formattedIsm = formatText(ism, kattaKichik);
// const formattedFamilia = formatText(familia, kattaKichik);
// const formattedYosh = formatText(yosh, kattaKichik);

// const div = document.createElement('div');
// div.classList.add('w-[800px]', 'rounded-[30px]', 'p-[50px]', 'bg-[black]');
// document.body.append(div);

// const h1 = document.createElement('h1');
// h1.textContent = `1. Имя: ${formattedIsm}`;
// h1.classList.add('text-[white]', 'text-[40px]');

// const h2 = document.createElement('h1');
// h2.textContent = `2. Фамилия: ${formattedFamilia}`; 
// h2.classList.add('text-[white]', 'text-[40px]');

// const h3 = document.createElement('h1');
// h3.textContent = `3. Возраст: ${formattedYosh}`;
// h3.classList.add('text-[white]', 'text-[40px]');

// div.append(h1, h2, h3);


// const title = document.getElementById('qoyniqoltigi');


// const color = prompt('Enter a background color:');
// if (color) {
//     title.style.backgroundColor = color;
// }

// const textColor = prompt('Enter a text color:');
// if (textColor) {
//     title.style.color = textColor;
// }


// привет я фанат реала. Я горжусь своей легендой в легендарном составе с 12 игроками самый лучший из них refery, но пенальти забывать не надо.
// а легендарный состав реала: var судья Альфредо Ди Стефано Роналду и отец реала Меssi
 

// alert("Здравствуйте! вам зададут несколько вопросов(20) это чтобы узнать больше о вас");
// const имя = prompt("Как вас зовут?");
// console.log("имя:", имя);


// const Фамилия = prompt("введите фамилию тоже (необязательно можно ввести просто НЕТ)");
// console.log("фамилия:", Фамилия);


// const лет = prompt("сколько вам лет?");
// console.log("мне лет:", лет );


// const цвет = prompt("ваш любимый цвет");
// console.log("мой любимый цвет:", цвет);

// const число = prompt("ваше любимое число");
// console.log("моё любимое число" число)

// const адрес = prompt("ваш домашний адрес");
// console.log("адрес" адрес)

