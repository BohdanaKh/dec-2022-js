// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єкт

let form = document.forms.userForm;
form.onsubmit = function (eo){
    eo.preventDefault();

    let info = document.createElement('div');
    info.classList.add('object');
    let name = document.createElement('div');
    name.classList.add('items');
    let age = document.createElement('div');
    age.classList.add('items');

    name.innerText = `Name: ${this.name.value} ${this.surname.value}`;
    age.innerText = `Age: ${this.age.value}`;

info.append(name,age);
document.body.appendChild(info);
}
// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

function count() {
    let count = +(localStorage.getItem('count')) || 0;
    localStorage.setItem('count', count + 1);
    let a = +(document.getElementById('fg').innerText);
    document.getElementById('fg').innerText=a+count;
}
window.addEventListener('load',count);



// ==========================

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let sessions = [];
    function visit () {
        let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        sessions.push(new Date());
        localStorage.setItem('sessions', JSON.stringify(sessions));
}
window.addEventListener('load',visit);

// =========================

//     зробити масив на 100 об'єктів та дві кнопки prev next
let index = 1;
function Obj(id,title){
    this.id = id;
    this.title = title;}
let array =  [];
for (let i = 0; i < 100; i++) {
   let obj = new Obj(index++,'joe');
   array.push(obj);
    }
console.log(array);


let current_position = 1;
let step = 10;

function changePosition(position)
{
    let objects = document.getElementById('objects');

    if (position < 1) {position = 1}
    if (position > array.length / step) {position = array.length / step}

    objects.innerHTML ='';

    for (let i = (position-1) * step; i < (position * step) && i < array.length; i++) {
        objects.innerHTML += `${array[i].id} ${array[i].title}` + '<br>';
    }
}

// при завантажені сторінки з'являються перші 10 об'єктів.

window.onload = function() {
  changePosition(1);
 };

//   При натисканні next виводяться настпні 10 об'єктів
let next = document.getElementById('next');

next.onclick = function ()
{

    if (current_position < array.length/step) {
        current_position++;
        changePosition(current_position);
    }
}

// При натисканні prev виводяться попередні 10 об'єктів
let prev = document.getElementById('prev');

prev.onclick = function()
{
    if (current_position > 1) {
        current_position--;
        changePosition(current_position);
    }
}

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let rows = document.createElement('input');
rows.setAttribute('type','number');
rows.setAttribute('id','setRows');
rows.setAttribute('label','Кількість рядків')

let cells = document.createElement('input');
cells.setAttribute('type','number');
cells.setAttribute('id','setCells');

let content = document.createElement('input');
content.setAttribute('type','text');
content.setAttribute('id','setContent');

let button2 = document.createElement('button');
button2.style.background='yellow';
button2.style.width = '100px';
button2.style.height = '40px';
button2.textContent = 'Build';

document.body.append(rows,cells,content,button2);
//
button2.onclick = function (){
    let table =   document.createElement('table');
    let numsR = document.getElementById('setRows').value;
    for (let i=0; i<numsR; i++ ) {
        let nth = document.createElement('tr');
        nth.style.border ='1px solid black';
        nth.style.background = 'grey';
        let numsC = document.getElementById('setCells').value;
        for (let l=0; l<numsC; l++) {
            let jth =  document.createElement('td');
            jth.style.border ='1px solid black';
            jth.style.width = '100px';
            jth.style.height = '80px';
            jth.innerText = document.getElementById('setContent').value;
            jth.style.textAlign = 'center';
            nth.append(jth);
        }
        table.append(nth);
    }
    document.body.appendChild(table);
}