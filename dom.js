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

// let items = document.getElementsByClassName('list-group-item');

// items[4].style.backgroundColor = 'green';

// let itemTag = document.getElementsByTagName('li');

// itemTag[4].style.fontWeight = 'bold';

/// QUERYSELECTOR   //

// let header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px black';

// let input = document.querySelector('input');
// input.value = 'hello World';

// let submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector
//     ('.list-group-item:last-child');
// lastItem.style.color = 'blue';


//  QUERYSELECTORALL  //


// let items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green';


// let titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'grey';
// }

///final commit ///





///TRAVERSING THE DOM  //

let itemList = document.querySelector('#items');

//parentNode

// console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = 'grey';
// // console.log(itemList.parentNode.parentNode.parentNode);


//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement.parentElement);


//   CHILDNODES   //


// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// //   FIRSTCHILD   //
// console.log(itemList.firstChild);

// // firstElementChild   ///
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'



//   LASTCHILD   //
// console.log(itemList.lastChild);

// lastElementChild   ///
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4'


// nextSibling  //
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousSibling);

// // previousElemnetSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement //


// //create a div
// let newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';


// // Add id
// newDiv.id = 'hello 1';

// // Add attribute
// newDiv.setAttribute('title', 'Hello div');

// // create a text node
// let newDivText = document.createTextNode('Hello world');

// // add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');


// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv , h1);



//create a div
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello2';


// Add id
newDiv.id = 'hello2';

// Add attribute
newDiv.setAttribute('title', 'Hello World');

// create a text node
let newDivText = document.createTextNode('Hello world');

// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('div .title2');
let h2 = document.querySelector('h2 title');


console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv , h2);





