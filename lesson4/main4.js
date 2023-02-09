// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRect(a,b){
    return a*b
}
console.log(areaRect(5.2,2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r){
    return Math.PI*r**2;
}
console.log(circleSquare(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h,r){
   return (2*Math.PI*r**2+2*Math.PI*r*h)
}
console.log(areaCylinder(5,1.5))
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrSome(array){
    for (const arrayElement of array) {
     console.log(arrayElement)
    }
}
arrSome([10,20,30]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function someText(text){
    document.write(`<p> ${text} </p>`);
}
someText('how do u do');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function someList(text){
    document.write(`<ul> <li> ${text} </li> <li> ${text} </li> <li> ${text} </li> </ul>`);
}
someList('Hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function newList(x,text){
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(` </ul>`);
}
newList(3,'Hello');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayPrimitives(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li> ${arrayElement} </li>`);
    }
    document.write(` </ul>`);
}
arrayPrimitives(['dffh', 445, -18, 'dsfd', false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250