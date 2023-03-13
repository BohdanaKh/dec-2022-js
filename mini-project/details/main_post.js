//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//


let url = new URL(location.href);
let data = url.searchParams.get('data');
let postDetails = JSON.parse(data);
let block2 = document.createElement('div');
block2.setAttribute('class','container');
document.body.appendChild(block2);


let div = document.createElement('div');
div.setAttribute('class','bigBlock');
let title = document.createElement('div')
div.setAttribute('class','target');
let id = document.createElement('div')
div.setAttribute('class','target');
let textBody = document.createElement('div')
div.setAttribute('class','target');
title.innerText = `Title ${postDetails.title}`;
id.innerText = `Post ID: ${postDetails.id}  User ID: ${postDetails.userId}`;
textBody.innerText = `${postDetails.body}`;
div.append(title,id,textBody);
block2.appendChild(div);

let postId = postDetails.id;
let url3 = new URL('https://jsonplaceholder.typicode.com/posts/POST_ID/comments');

let url4 = url3.toString().replace('POST_ID', postId);
let newUrl1 = new URL(url4);


let myButton = document.createElement('button');
myButton.setAttribute('class','button');
myButton.innerText = 'Show comments';
block2.append(myButton);

function show() {
       fetch(newUrl1)
           .then(value => value.json())
           .then(comments => {
               let bigDiv = document.createElement('div');
               bigDiv.setAttribute('class','container');
               for (const comment of comments) {
                let d1 = document.createElement('div');
                d1.setAttribute('class','itemCom')
                   for (const key in comment) {
                       d1.innerText +=`${key}: ${comment[key]}   `+ ' ';
                   }
                bigDiv.append(d1);
               }
               block2.appendChild(bigDiv);
    })
}
myButton.addEventListener('click', show);


