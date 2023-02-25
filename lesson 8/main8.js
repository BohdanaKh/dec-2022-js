// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone
}
let users = [
    new User(2, 'john', 'halk', 'jturkey@gmail.com', '0631233324'),
    new User(4, 'ann', 'halk', 'aturkey@gmail.com', '0631233326'),
    new User(1, 'bob', 'halk', 'bturkey@gmail.com', '0631233323'),
    new User(3, 'jane', 'halk', 'jturkey@gmail.com', '0631233325'),
    new User(6, 'max','halk', 'mh@gmail.com','0631233328'),
    new User(5, 'leo', 'halk', 'lturkey@gmail.com', '0631233327'),
    new User(9, 'white','halk', 'wh@gmail.com','0631233321'),
    new User(7, 'rio','halk', 'rh@gmail.com','0631233329'),
    new User(10, 'mary','halk', 'mh@gmail.com','0631233322'),
    new User(8, 'paul','halk', 'ph@gmail.com','0631233330')
]
console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
 class Client {
constructor(id,name,surname,email,phone,order) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order;
}
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(10,'sew','hipp','shi@swit.ua','0980145236',['tomato','apple','juice','bread','cheese','corn']),
    new Client(11,'moe','hipp','moe@swit.ua','0980145236',['tomato','apple','juice','bread','cheese','corn','oil']),
    new Client(12,'joe','hipp','ji@swit.ua','0980145236',['tomato','cheese','corn']),
    new Client(13,'any','hipp','ann@swit.ua','0980145236',['corn']),
    new Client(14,'air','hipp','free@swit.ua','0980145236',['tomato','apple','bread']),
    new Client(15,'fly','hipp','fly@swit.ua','0980145236',['cheese','corn']),
    new Client(16,'pio','hipp','pio@swit.ua','0980145236',['tomato','apple','juice','bread','cheese','corn','oil','meat']),
    new Client(17,'rio','hipp','name@swit.ua','0980145236',['bread','cheese','mushrooms','seeds']),
    new Client(18,'mag','hipp','mii@swit.ua','0980145236',['juice','bread','cheese','garlic']),
    new Client(19,'ted','hipp','teo@swit.ua','0980145236',['juice','bread','water','meat','milk'])
]
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model,producer,year,maxSpeed,engine){
    this.model=model;
    this.producer=producer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engine=engine;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function(max){
        console.log(`їдемо зі швидкістю ${max} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
this.info = function (){
    console.log(this);
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
this.increaseMaxSpeed = function (newSpeed){
        return maxSpeed+=newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
this.changeYear = function (newValue){
        return year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
this.addDriver = function (driver){
        this.driver = driver;
    }
}
let car1 = new Car('noble m600', 'noble automotive','2009',346, 4.4, );
console.log(car1);
car1.drive(50);
car1.info();
console.log(car1.increaseMaxSpeed(16));
console.log(car1.changeYear(2010));
car1.addDriver({name: 'paul', surname: 'quick', age: 26, gender: 'male'});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
/*class Cars {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive (max){
        console.log(`їдемо зі швидкістю ${max} на годину`);}
    info () {
            console.log(this);
    }
   increaseMaxSpeed (newSpeed){
        return this.maxSpeed+=newSpeed;}
   changeYear (newValue){
        return this.year = newValue;}
    addDriver (driver){
        this.driver = driver;}
}

let car = new Cars('noble m600', 'noble automotive','2009',346, 4.4, );
car.drive(80);
car.info();
console.log(car.increaseMaxSpeed(16));
console.log(car.changeYear(2010));
car.addDriver({name: 'paul', surname: 'quick', age: 26, gender: 'male'});
console.log(car);*/
//

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Sinderella(name,age,size){
    this.name=name;
    this.age=age;
    this.size=size;
}
let sinderellas = [
    new Sinderella('katya',18,35),
    new Sinderella('varya',22,37),
    new Sinderella('maya',29,41),
    new Sinderella('lesya',19,37),
    new Sinderella('nadya',18,38),
    new Sinderella('olya',20,36),
    new Sinderella('nastya',30,39),
    new Sinderella('polya',21,38),
    new Sinderella('solya',25,37),
    new Sinderella('julya',23,40),
];
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let Prince = class{
    constructor(name,age,shoeSize) {
        this.name=name;
        this.age=age;
    this.shoeSize=shoeSize;
    }
}
let prince = new Prince('romchik3',35,36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let item of sinderellas) {
    if(item.size === prince.shoeSize){
        console.log(item);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(sinderellas.find(sinderella => sinderella.size === prince.shoeSize));