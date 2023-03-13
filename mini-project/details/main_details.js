// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//

let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);
let container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
builder(user);


function builder(object) {

    for (let key in object) {
        let item = object[key];
        let userInfo=[];
        if (typeof item !== "object") {
            userInfo.push(`${key}: ${item}`, ' ');
            container.append(userInfo);

        } else {

            userInfo.push(`${key}:`);
            container.append(userInfo);
            builder(item);
        }
    }
}


//
let button = document.createElement('button');
button.setAttribute('class','button');
button.innerText = 'post of current user';
document.body.appendChild(button);

let userId = user.id;
let url1 = new URL('https://jsonplaceholder.typicode.com/users/USER_ID/posts');

let url2 = url1.toString().replace('USER_ID', userId);
let newUrl = new URL(url2);

button.onclick =function (){ fetch(newUrl)
    .then(value => value.json())
    .then(posts => {
let block = document.createElement('div');
block.setAttribute('class','container');
        for (const post of posts) {
            let userPost = document.createElement('div');
            userPost.setAttribute('class','itemPost')

            let a = document.createElement('a');
            a.innerText = `${post.id}  ${post.title}`;
            a.href = 'post-details.html?data=' + JSON.stringify(post);

            userPost.appendChild(a);
            block.appendChild(userPost);
        }
        document.body.appendChild(block);
    })};

