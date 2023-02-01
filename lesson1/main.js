/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log ```*/
let ss='hello';
console.log(ss);
let tt ='owu';
console.log(tt);
let rr='com';
console.log(rr);
let d ='ua';
console.log(d);
let n=1;
console.log(n);
let u=10;
console.log(u);
let m=-999;
console.log(m);
let k=123;
console.log(k);
let PI=3.14;
console.log(PI);
let q=2.7;
console.log(q);
let s=16;
console.log(s);
let boo=true;
console.log(boo);
let w=false;
console.log(w);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName='Богдана';
let middleName='Анатоліївна';
let lastName='Химинець';
let person = firstName +' '+ middleName +' '+ lastName;
console.log(person);

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

/*
Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
*/
let firstN=prompt('Введіть ім`я');
let midN=prompt('Введіть по-батькові');
let age=prompt('Введіть вік');
console.log(firstN,  midN, ',', age);