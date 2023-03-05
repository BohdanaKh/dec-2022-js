// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єкт
// let form = document.forms.userForm;
// form.onsubmit = function (eo){
//     eo.preventDefault();
//
//     let info = document.createElement('div');
//     info.classList.add('object');
//     let name = document.createElement('div');
//     name.classList.add('items');
//     let age = document.createElement('div');
//     age.classList.add('items');
//
//     name.innerText = `Name: ${this.name.value} ${this.surname.value}`;
//     age.innerText = `Age: ${this.age.value}`;
//
// info.append(name,age);
// document.body.appendChild(info);
// }
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// function count() {
//     let count = +(localStorage.getItem('count')) || 0;
//     localStorage.setItem('count', count + 1);
//     let a = +(document.getElementById('fg').innerText);
//     document.getElementById('fg').innerText=a+count;
// }
// window.addEventListener('load',count);



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// let sessions = [];
//     function visit () {
//         let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//         sessions.push(new Date());
//         localStorage.setItem('sessions', JSON.stringify(sessions));
// }
// window.addEventListener('load',visit);
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
let index = 1;
function Obj(id,title){
    this.id = id;
    this.title = title;}
let something =  [];
for (let i = 0; i < 100; i++) {
   let obj = new Obj(index++,'joe');
   something.push(obj);
    }
console.log(something);


// при завантажені сторінки з'являються перші 10 об'єктів.


// let currentItem = something.indexOf(something[0]);
// console.log(currentItem);
let current_page = 1;
let step = 10;
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
function changePage(page)
{
    let btn_next = document.getElementById("next");
    let btn_prev = document.getElementById("prev");
    let listing_table = document.getElementById("listingTable");
    let page_span = document.getElementById("page");
    // Validate page
    if (page < 1) {page = 1}
    if (page > numPages()) {page = numPages()}

    listing_table.innerHTML = "";

    for (let i = (page-1) * step; i < (page*step) && i < something.length; i++) {
        listing_table.innerHTML += `${something[i].id} ${something[i].title}` + "<br>";
    }
    page_span.innerHTML = page + "/" + numPages();

    if (page === 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page === numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return something.length / step;
}

window.onload = function() {
    changePage(1);
};





// function loadingPage () {
//     let prev = document.createElement('div');
//     prev.setAttribute('id','prev10');
//     for (let i = currentItem; i < 10; i++) {
//         const item = something[i];
//
//         let d = document.createElement('div');
//         d.innerText = `${item.id} ${item.title}`;
//         prev.append(d);
//     }
//
//     document.body.appendChild(prev);
// }
// window.addEventListener('load',loadingPage);
//
// //
// // //     При натисканні next виводяться настпні 10 об'єктів
//
//
// //
// let next = document.getElementById('next');
// next.onclick  = function () {
//
//     currentItem+=10;
//     let len = currentItem+10;
//  document.getElementById('prev10').style.display='none';
//
//
//     let nex = document.createElement('div');
//     nex.setAttribute('id','prev10');
//     for (let i = currentItem; i < len; i++) {
//         const item = something[i];
//
//         let d = document.createElement('div');
//
//         d.innerText = `${item.id} ${item.title}`;
//        nex.append(d);
//     }
//     document.body.appendChild(nex);
//
// }
// // // При натисканні prev виводяться попередні 10 об'єктів
// console.log(currentItem);
//
// let prev = document.getElementById('prev');
// prev.onclick  = function (ev) {
//     ev.preventDefault();
// currentItem-=10;
// let len = currentItem+10;
//    document.getElementById('prev10').style.display ='none';
// let pre = document.createElement('div');
// pre.setAttribute('id','prev10');
//
//     for (let i = len; i >currentItem; i--) {
//         const item = something[i];
//
//         let d = document.createElement('div');
//         d.innerText = `${item.id} ${item.title}`;
// pre.append(d);
//     }
//         document.body.append(pre);
//
// }
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let rows = document.createElement('input');
// rows.setAttribute('type','number');
// rows.setAttribute('id','setRows');
// rows.setAttribute('label','Кількість рядків')
//
// let cells = document.createElement('input');
// cells.setAttribute('type','number');
// cells.setAttribute('id','setCells');
//
// let content = document.createElement('input');
// content.setAttribute('type','text');
// content.setAttribute('id','setContent');
//
// let button2 = document.createElement('button');
// button2.style.background='yellow';
// button2.style.width = '100px';
// button2.style.height = '40px';
// button2.textContent = 'Build';
//
// document.body.append(rows,cells,content,button2);
// //
// button2.onclick = function (){
//     let table =   document.createElement('table');
//     let numsR = document.getElementById('setRows').value;
//     for (let i=0; i<numsR; i++ ) {
//         let nth = document.createElement('tr');
//         nth.style.border ='1px solid black';
//         nth.style.background = 'grey';
//         let numsC = document.getElementById('setCells').value;
//         for (let l=0; l<numsC; l++) {
//             let jth =  document.createElement('td');
//             jth.style.border ='1px solid black';
//             jth.style.width = '100px';
//             jth.style.height = '80px';
//             jth.innerText = document.getElementById('setContent').value;
//             jth.style.textAlign = 'center';
//             nth.append(jth);
//         }
//         table.append(nth);
//     }
//     document.body.appendChild(table);
// }