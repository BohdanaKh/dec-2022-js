// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[arr.length]=118.3;
arr[arr.length]='Paddington';
arr[arr.length]=null;
arr[arr.length]=[33,22,11];
arr[arr.length]='d';
arr[arr.length]=false;
arr[arr.length]= {};
arr[arr.length]=' ';
arr[arr.length]=15;
arr[arr.length]=-9;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title:'B1', pageCount:133, genre:'detective'};
let book2 = {title: 'B2', pageCount: 233, genre: 'science'};
let book3= {title:'B3', pageCount:33, genre:'journal'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let b1 = {title:'WTR1', pageCount:133, genre:'detective', authors:[{name:'A', age:58}, {name:'L', age:54}]};
let b2 = {title: 'WTR2', pageCount: 233, genre: 'science', authors:[{name:'N', age:22}, {name:'P', age:34}]};
let b3= {title:'WTR3', pageCount:33, genre:'journal', authors:[{name:'C', age:41}, {name:'L', age:26}]};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name:'Q', username:'q', password:11},
    {name:'W', username:'w', password:22},
    {name:'E', username:'e', password:33},
    {name:'R', username:'r', password:44},
    {name:'T', username:'t', password:55},
    {name:'Y', username:'y', password:66},
    {name:'U', username:'u', password:77},
    {name:'I', username:'i', password:88},
    {name:'K', username:'k', password:99},
    {name:'P', username:'p', password:10}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 1;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
x!==0 ? console.log('Вірно'):console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15;
if (time>=0 && time<=15){
    console.log('Перша чверть години')
} else if (time>=16 && time<=30) {
    console.log('Друга чверть години')
} else if (time>=31 && time<=45) {
    console.log('Третя чверть години')
} else if (time>=46 && time<=59) {
    console.log('Четверта чверть години')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay='tyfh';
switch (weekDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('???');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=8;
let b=3;
if (a>b){
    console.log('a is max');
}else if (a===b) {
    console.log('a=b');
}else {
    console.log('b is max');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  oператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let y=NaN;
// if (y===undefined || y=== null ||y===''|| y===false||y===0|| isNaN(y)) {
//         y = 'default';
// }
// console.log(y);
let y=-8||'default';
console.log(y);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if ((coursesAndDurationArray[0].monthDuration)>5) {
    console.log('Super');
}
if ((coursesAndDurationArray[1].monthDuration)>5) {
    console.log('Super');
}
if ((coursesAndDurationArray[2].monthDuration)>5) {
    console.log('Super');
}
if ((coursesAndDurationArray[3].monthDuration)>5) {
    console.log('Super');
}
if ((coursesAndDurationArray[4].monthDuration)>5) {
    console.log('Super');
}
if ((coursesAndDurationArray[5].monthDuration)>5) {
    console.log('Super');
}