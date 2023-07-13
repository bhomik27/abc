//examine the documnet object
//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;

//console.log(document.doctype);
//console.log(document.heaad);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);

//document.all[10].textContent = 'hello';
//console.log(document.forms);


//GETELEMENTBYID //

//console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textContent = 'hello';
// // headerTitle.innerText = 'by';
// headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px black';


// GETELEMENTSBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// //added features
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';



// //added features 2

// items[2].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }


//  GETELEMENTBYTAGNAME   //


// let li = document.getElementsByTagName('li');
// console.log(items);

// //added features
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';



// //added features 2

// li[2].style.backgroundColor = 'green';

// for (let i = 0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

let items = document.getElementsByClassName('list-group-item');

items[4].style.backgroundColor = 'green';

let itemTag = document.getElementsByTagName('li');

itemTag[4].style.fontWeight = 'bold';
