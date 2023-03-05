let visits = JSON.parse(localStorage.getItem('sessions'));
console.log(visits);
for (const visit of visits) {
    let b1 = document.createElement('div');
    b1.style.background = 'cornflowerblue';
    b1.style.width = '200px';
    b1.style.margin = '20px';
    b1.innerText=visit;

    document.body.append(b1);
}