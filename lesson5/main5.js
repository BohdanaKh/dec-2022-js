// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRect = (a,b) => a*b;
console.log(areaRect(6,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSquare = (r) => Math.PI*r**2;
console.log(circleSquare(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (h,r) => (2*Math.PI*r**2+2*Math.PI*r*h);
console.log(areaCylinder(5,1.5))
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrSome = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
arrSome([10,20,30]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let someText = (text) => {
    document.write(`<p> ${text} </p>`);
}
someText('how do u do?');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let someList = (text) => {
    document.write(`<ul> <li> ${text} </li> <li> ${text} </li> <li> ${text} </li> </ul>`);
}
someList('Hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let newList = (x,text) => {
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(` </ul>`);
}
newList(3,'Hello');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayPrimitives = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li> ${arrayElement} </li>`);
    }
    document.write(` </ul>`);
}
arrayPrimitives(['dffh', 445, -18, 'dsfd', false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок

let arrayOfUsers = (array) => {
    for (let item of array) {
        document.write(`<div> id:${ item.id}, name: ${item.name}, age: ${item.age} </div>`);
    }
}

let participants = [
    {id:1, name: 'iren', age: 23},
    {id:2, name: 'vasya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30}
];
arrayOfUsers(participants);
// - створити функцію яка повертає найменьше число з масиву
let nums = [-88,-47,-52,2,6,458,0];
let minOfNumbers = (array) => {
    let min = array[0];
    for (const element of array) {
        if (element<min){
            min=element;
        }
    }
    return min;
}
console.log(minOfNumbers(nums));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let summ=0;
    for (const item of arr) {
        summ+=item;
    }
    return summ;
}
console.log(sum([20,30,40,50]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let l1=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=l1;
    console.log(arr);
}
swap([11,22,33,44,55],2,3);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currencyvalue of currencyValues) {
        if (currencyvalue.currency === exchangeCurrency) {
            return sumUAH / currencyvalue.value;
        }
    }
}
console.log(exchange(20000,[{currency:'USD',value:8},{currency:'EUR',value:10}],'EUR'));