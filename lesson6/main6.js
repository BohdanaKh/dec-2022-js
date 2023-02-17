// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str='hello world';
console.log(str.length);
let str1='lorem ipsum';
console.log(str1.length);
let str2='javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str3='hello world';
console.log(str3.toUpperCase());
let str4='lorem ipsum';
console.log(str4.toUpperCase());
let str5='javascript is cool';
console.log(str5.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str6='HELLO WORLD';
console.log(str6.toLowerCase());
let str7='LOREM IPSUM';
console.log(str7.toLowerCase());
let str8='JAVASCRIPT IS COOL';
console.log(str8.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str9= ' dirty string   ';
let str91=str9.trim();
console.log(str91);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str10 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = (text) => text.split(" ");
let arr = stringToArray(str10);
console.log(arr);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums=[10,8,-7,55,987,-1011,0,1050,0];
let numsToString=nums.map(x => x.toString());
console.log(numsToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let numsS = [11,21,3];
    function sortNums(array, direction) {
        array.sort(function(a, b){
           if (direction === 'ascending') {
    return a - b;
}
if (direction === 'descending') {
    return b - a;
}
});
return array;
}
console.log(sortNums(numsS, 'ascending')); // [3,11,21]
console.log(sortNums(numsS, 'descending'));// [21,11,3]


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort1 = coursesAndDurationArray.sort((a,b) => {return b.monthDuration - a.monthDuration});
console.log(sort1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(u => u.monthDuration>5);
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapped = coursesAndDurationArray.map((value,index) => {
    return {id:index+1, title:value.title, monthDuration:value.monthDuration}});
console.log(mapped);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: '6', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: '7', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: '8', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: '9', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: '10', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: 'jack', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: 'queen', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: 'king', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'spade', // 'spade', 'diamond','heart', 'clubs'
        value: 'ace', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: '6', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: '7', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: '8', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: '9', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: '10', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: 'jack', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: 'queen', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: 'king', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'diamond', // 'spade', 'diamond','heart', 'clubs'
        value: 'ace', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: '6', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: '7', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: '8', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: '9', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: '10', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: 'jack', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: 'queen', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: 'king', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'heart', // 'spade', 'diamond','heart', 'clubs'
        value: 'ace', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'red'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: '6', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: '7', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: '8', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: '9', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: '10', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: 'jack', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: 'queen', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: 'king', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},
    {cardSuit: 'clubs', // 'spade', 'diamond','heart', 'clubs'
        value: 'ace', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black'},

]
// - знайти піковий туз
let find = cards.find(card => card.value==='ace' && card.cardSuit==='spade');
console.log(find);
// - всі шістки
let six=cards.filter(card => card.value==='6');
console.log(six);
// - всі червоні карти
let red=cards.filter(card => card.color==='red');
console.log(red);
// - всі буби
let diamonds=cards.filter(card => card.cardSuit==='diamond');
console.log(diamonds);
// - всі трефи від 9 та більше
let clubs=cards.filter(card => card.cardSuit==='clubs' && card.value !=='6'&& card.value !=='7'&& card.value !=='8');
console.log(clubs);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reducer = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    }
    else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }
    else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }
    else  {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(reducer);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass

let sass = coursesArray.filter(course => course.modules.includes('sass'));
// {
    // for (const item of course.modules) {
    //     if (item==='sass') {
    //         return course;
    //     }
    // }
// });
console.log(sass);

// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(docker);
