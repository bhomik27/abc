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

let items = document.getElementsByClassName('list-group-item');
console.log(items);


console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';