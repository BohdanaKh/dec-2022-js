// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleSquare(a, b) {
    return a*b;
}
console.log("Площа прямокутника = ", rectangleSquare(10, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleSquare(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log('Площа круга = ', circleSquare(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylindrSquare(h, r) {
    return 2 * Math.PI * r * h;
}
console.log('Площа циліндру = ', cylindrSquare(10, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

function iterator(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

iterator([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writer(text) {
    document.write(`<p> ${text} </p>`)
}

writer("Hello");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text) {
    document.write(`<ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`)
}

createList("123456789");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createNewList(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
    document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}

createNewList("123456789", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listOfPrimitives() {
    document.write(`<ul>`);
    for (const argument of arguments) {
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`);
}
listOfPrimitives(5, 'Hello', 7, false);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function builder() {
    for (const argument of arguments) {
        document.write(`<div>id: ${argument.id} | name: ${argument.name} | age: ${argument.age} </div>`)
    }
}
builder({id: 1, name: "Olha", age: 20}, {id: 2, name: "Max", age: 21}, { id: 3, name: "Ivan", age: 22});

// - створити функцію яка повертає найменьше число з масиву

function minSearch() {
    let min = arguments[0];
    for (const argument of arguments) {
       if (argument < min) {
          min = argument;
       }
    }
    return min;
}

console.log('Найменше число в масиві ', minSearch( 20, 30, 40, 50));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

console.log('Сума елементів масиву ', sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log('Swap ', swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let sumExchanged = 0;
    for (const item of currencyValues) {
       if (item.currency === exchangeCurrency) {
         sumExchanged = sumUAH / item.value;
       }
    }
    return sumExchanged;
}

console.log('Exchange ', exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));