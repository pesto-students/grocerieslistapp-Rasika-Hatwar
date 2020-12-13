let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

document.querySelector('form').addEventListener('submit', handleSubmitForm);
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    if (input.value != '')
        addItem(input.value);
    input.value = '';
}

data.forEach((item) => {
    addItem(item)
  })

function addItem(item) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="list-item" id="myItem">${item}</span>
        <button name="editButton"><i class="fas fa-edit"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('grocery-list-item');
    ul.appendChild(li);
}

document.querySelector('ul').addEventListener('click', handleClickDeleteOrEdit);
function handleClickDeleteOrEdit(e) {
    if (e.target.name == 'editButton')
        editList(e);

    if (e.target.name == 'deleteButton')
        deleteList(e);
}
function editList(e) {
    let item = e.target.parentNode;
    console.log(item.innerHTML.value); 
}

function deleteList(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function () {
        item.remove(); 
       
    });

    item.classList.add('list-item-fall');
}
document.getElementById('clearAll').addEventListener('click', handleClearAll);
function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
    localStorage.clear()
}