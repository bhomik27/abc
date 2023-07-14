let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);




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

    // create delete button element
    let deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text Node
    deleteBtn.appendChild(document.createTextNode('x'));

    // append the x button after list group item
    li.appendChild(deleteBtn);




    // create delete button element
    let editBtn = document.createElement('button');

    // add classes to del button
    editBtn.className = 'btn btn-primary float-right edit';

    //append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    // append the x button after list group item
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





