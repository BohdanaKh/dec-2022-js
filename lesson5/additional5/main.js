// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію, яка приймає три числа та виводить найменше. (Без Math.min!)
let minOf = (a,b,c) =>{
   let min;
   b<a? (c<b? min=c:min=b):(c<a? min=c:min=a);
   return min;
}
console.log(minOf(1,5,-9));
// - створити функцію, яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxOf = (a,b,c) =>{
   let max;
   if (a>b && a>c){ max = a;
   }
   else if(b>a && b>c){
      max=b;
   }else{
      max=c;
   }
   return max;
}
console.log(maxOf(18,55,-9));
// - створити функцію, яка повертає найбільше число з масиву
let max2 = (array) => {
   let max=array[0];
   for (const item of array) {
      if (item>max){
         max=item;
      }
   }
   return max;
}
console.log(max2([-2, -1,0, 1, 2]));
// - створити функцію яка повертає найменше число з масиву
let mins1 = (array) => {
   let min = array[0];
   for (const item of array) {
      if (item<min){
         min=item;
      }
   }
   return min;
}
console.log(mins1([-2, -1,0, 1, 2]));
// - створити функцію, яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let adds=(array) =>{
   let sum=0;
   for (const arrayElement of array) {
      sum+=arrayElement;
   }
   return sum;
}
console.log(adds([1,2,10]));
// - Дано натуральне число n. Виведіть всі числа від 1 до n.
let hrr=(n)=>{
   for (let i = 1; i <= n; i++) {
      console.log(i);
   }
}
hrr(3);
// - Дано два цілих числа A і В . Виведіть всі числа від A до B включно в порядку зростання, якщо A < B, або в порядку спадання в протилежному випадку.
let numbers = (A,B) => {
   if (A < B) {
      for (let i = A; i <= B; i++) {
         console.log(i);
      }
   } else {
      for (let j = A; j >= B; j--) {
         console.log(j);
      }
   }
}
numbers(7,4);
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт, який знаходиться в індексі "i", на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let replacer = (array, i) => {
   let ar1=array[i];
   array[i]=array[i+1];
   array[i+1]=ar1;
   console.log(array);
};
replacer([9,8,0,4],2);

// - Створити функцію, яка буде переносити елементи зі значенням 0 у кінець масиву, зберігаючи при цьому порядок ненульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
//  [0,0,1,0]   => [1,0,0,0]
// let displacer = (array) => {
//    let l=array.length;
//    for (let i=0; i<l; i++) {
//       let item = array[i];
//       if (item !== 0) {
//          array[i]=item;
      // } else {
      //    array[array.length] = item;
      //    l--;

   //
   // // if (item !== 0) {
   // //    j++;
   // // }
   // // else{
   // //    array.length=array.length-1;
   // //    array[array.length] = item;
   // //
   // //    l--;
   //
   // }

// console.log(array);
// }
// displacer([2,0,0,2,0,4]);

