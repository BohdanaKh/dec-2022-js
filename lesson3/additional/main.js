// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array=[5, 6, 7, 8, 9];
// console.log(array);
// let array1=['q', 'w', 'e', 'r', 't'];
// console.log(array1);
// let array2=['true', true, 58, 0, 'n'];
// console.log(array2);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray=[];
// emptyArray[0]='sara';
// emptyArray[1]='mary';
// emptyArray[2]='henry';
// emptyArray[3]='sam';
// emptyArray[4]='lewis';
// emptyArray[5]='mia';
// emptyArray[6]={};
// emptyArray[7]='sixth';
// console.log(emptyArray);

// - є масив
// let numbersArray = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i=0;
// while ( i < (numbersArray.length)) {
//     console.log(numbersArray[i]);
//     i++;
// }
// //     2. перебрати його циклом for
// for (i=0; i<numbersArray.length; i++) {
//     console.log(numbersArray[i]);
// }

    //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// while ( i < numbersArray.length) {
//     console.log(numbersArray[i+=1]);
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (i=0; i<numbersArray.length; i++) {
//     console.log(numbersArray[i+=1]);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// while ( i < numbersArray.length) {
//    if (numbersArray[i]%2===0)  {console.log(numbersArray[i])}
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (i=0; i<numbersArray.length; i++) {
//    if (numbersArray[i]%2===0)  {console.log(numbersArray[i])}
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (i=0; i<numbersArray.length; i++) {
//    if (numbersArray[i]%3===0)  {numbersArray[i]='okten'}
//    console.log(numbersArray[i])
// }
// // 8. вивести масив в зворотньому порядку.
// for (i=numbersArray.length-1; i>=0; i--) {
//    console.log(numbersArray[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.1
// let i=numbersArray.length-1;
// while ( i >=0) {
//     console.log(numbersArray[i]);
//     i--;
// }
// 9.2
// for (i=numbersArray.length-1; i>=0; i--) {
//     console.log(numbersArray[i]);
// }
//9.4
// for (i=numbersArray.length-1; i>=0; i--) {
//     console.log(numbersArray[i-=1]);
// }
//9.5
// while ( i>=0) {
//    if (numbersArray[i]%2===0)  {console.log(numbersArray[i])}
//     i--;
// }
// 9.7
// for (i=numbersArray.length-1; i>=0; i--) {
//    if (numbersArray[i]%3===0)  {numbersArray[i]='okten'}
//    console.log(numbersArray[i])
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let fri=[0.1,1.1,2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9];
// for (let fr of  fri ){
//     console.log(fr)
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let fri1=['0.1','1.1','2.2','3.1','4.3','5.5','6.4', '7.3','8.8','9.6'];
// for (let fr1 of fri1){
//     console.log(fr1)
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let fri2=[11,false, ['j','k'], 'gh', '0', '', {name:'olaf'}, 55, '33', 'df'];
// for (let fr2 of fri2){
//     console.log(fr2)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr=[23, true, 4<7,'dc34x', 'kl00нn', 36, 5<3, false, -9, 'a' ];
// for (let k=0; k<arr.length; k++){
// if (typeof arr[k] === "boolean"){
//     console.log(arr[k])
// }
//     }
// // // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let k=0; k<arr.length; k++){
// if (typeof arr[k] === "number"){
//     console.log(arr[k])
// }
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let ar of arr){
//     if (typeof(ar) === "string"){
//         console.log(ar)
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let weekArr=[];
// weekArr[0]='friday';
// weekArr[1]=5;
// weekArr[2]=true;
// weekArr[3]='wednesday';
// weekArr[4]=2;
// weekArr[5]=false;
// weekArr[6]={day:'thursday', number:4};
// weekArr[7]=['friday', 'saturday', 'sunday'];
// weekArr[8]=null;
// weekArr[9]='';
// for (let i=0; i<weekArr.length;i++){
//     console.log(weekArr[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (n=1;n<=10;n++){
//     console.log('krok#', n);
//     document.write(`${' krok#'} ${n},`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (c=1; c<=100; c++){
//     console.log('krok:', c);
//     document.write(`${' krok:'} ${c} `);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (c=0; c<=100; c+=2){
//     console.log('krok:', c);
//     document.write(`${' krok:'} ${c} `);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор