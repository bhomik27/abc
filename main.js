let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);




// add item function
function addItem(e) {
    
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    // add className
    li.className = 'list-group-item';
    
    // add textNode with input value
    li.appendChild(document.createTextNode(newItem));


    // get description input value
    const descInput = document.getElementById('description').value;

    //create a new textNode for description
    const descNode = document.createTextNode(' ' + descInput);

    //append to li item
    li.appendChild(descNode);

    // create delete button element
    let deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text Node
    deleteBtn.appendChild(document.createTextNode('x'));

    // append the x button after list group item
    li.appendChild(deleteBtn);


    // create edit button element
    let editBtn = document.createElement('button');

    // add classes to edit button
    editBtn.className = 'float-right';

    //append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    // append the edit button after list group item
    li.appendChild(editBtn);



    itemList.appendChild(li);

}


// function to delete li
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm('Are You Sure')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


/// filter items function
function filterItems(e) {

    //convert text to lowercase
    let text = e.target.value.toLowerCase();

    //get LIs array of nodes Collection
    let items = itemList.getElementsByTagName('li');

    // convert HtmlCollection to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        let description = item.childNodes[1].textContent;


        if (itemName.toLocaleLowerCase().indexOf(text) != -1  || description.toLocaleLowerCase().indexOf(text) != -1 ) {
            item.style.display='block' ;
        } else {
            item.style.display ='none';
        }
    });
}






