// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'green';
block.style.fontSize = '15px';
block.style.color = 'brown';
document.body.appendChild(block);
document.body.append(block.cloneNode(true));
//

// - Є масив:

let arr = ['Main','Products','About us','Contacts'];

// Зробити ul, в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ulList = document.createElement('ul');
for (const item of arr) {
    let liList = document.createElement('li');
    liList.innerText = item;
    ulList.append(liList);
    document.body.appendChild(ulList);
}
//
// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let block1 = document.createElement('div');
    block1.style.margin = '10px';
    block1.innerText = `${course.title}, monthduration: ${course.monthDuration}`;
    document.body.append(block1);
}

//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const course of coursesAndDurationArray) {
    let block2 = document.createElement('div');
    block2.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${course.title}`;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${course.monthDuration}`;

    block2.append(h1,p);
    document.body.appendChild(block2);
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let blockS = document.createElement('div');
    blockS.classList.add('member');

    let name  = document.createElement('h3');
    name.innerText = `${simpson.name}  ${simpson.surname}  (${simpson.age} yr.)`;

    let info = document.createElement('p');
    info.innerText = `${simpson.info}`;

    let photo = document.createElement('img');
    photo.src = simpson.photo;

    blockS.append(name,info,photo);
    document.body.appendChild(blockS);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const course of coursesArray) {
    let block3 = document.createElement('div');
    block3.classList.add('course');
    block3.style.width = '600px';
    block3.style.height = '350px';
    block3.style.border = '2px solid blue';
    block3.style.margin='20px';
    block3.style.textAlign = 'center';
    block3.style.display='flex';
    block3.style.flexWrap='wrap';
    block3.style.justifyContent = 'space-between';

    let index = 1;
    for (let key in course) {
        let block3_n = document.createElement('div');
        block3_n.classList.add(index++);
        block3_n.style.width = '600px';
        block3_n.style.height = '20px';
        block3_n.style.border = '2px solid blue';
        if (Array.isArray(course[key])===true){
            let mod = document.createElement('ul');
            for (const item of course[key]) {
                let lis = document.createElement('li');
                lis.innerText = item;
                mod.append(lis);
                block3_n.style.height = '300px';
                block3_n.append(mod);
            }
        }
        else{
        block3_n.innerText = `${course[key]}`;
        }
        block3.append(block3_n);
}
    document.body.appendChild(block3);
}
let u = document.getElementsByClassName('2');
console.log(u);
for (const item of u) {
item.style.width = '200px'}

let h = document.getElementsByClassName('3');
console.log(h);
for (const item of h) {
    item.style.width = '390px'}
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let element = document.createElement('h1');
element.setAttribute('id', 'text');
element.innerText = 'HELLOooooooooo';
element.style.color = 'orange';
let button = document.createElement('button');
button.style.background='cornflowerblue';
button.style.width = '300px';
button.style.height = '40px';
button.textContent = 'Remove element';
document.body.append(element,button);
// button.onclick = function (){document.getElementById('text').remove()};
button.onclick = function (){document.getElementById('text').hidden = true
}
let newLine = document.createElement('br');
document.body.append(newLine);
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let age = document.createElement('input');
age.setAttribute('type','number');
age.setAttribute('id','setAge');
age.style.background = 'grey';
age.style.width = '160px';
age.style.height = '40px';
age.style.margin = '20px';
let button1 = document.createElement('input');
button1.setAttribute('type','button');
button1.style.background='darkgreen';
button1.style.width = '280px';
button1.style.height = '30px';
button1.setAttribute('value', 'CONFIRM');

let note = document.createElement('p');
note.setAttribute('id','notification');
document.body.append(age,button1,note);

button1.onclick = function (){
    if (document.getElementById('setAge').value <18){
        document.getElementById('notification').innerText = `${'You\'re too young'}`;
    }}
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
//   let table =   document.createElement('table');
//     let numsR = document.getElementById('setRows').value;
//     for (let i=0; i<numsR; i++ ) {
//         let nth = document.createElement('tr');
//         nth.style.border ='1px solid black';
//         nth.style.background = 'grey';
//         let numsC = document.getElementById('setCells').value;
//         for (let l=0; l<numsC; l++) {
//           let jth =  document.createElement('td');
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
//     }