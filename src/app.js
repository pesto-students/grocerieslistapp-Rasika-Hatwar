const itemList = JSON.parse(localStorage.getItem('groceyItem'));
const userName = localStorage.getItem('userName');
const state = {
    itemList,
    userName
}
console.log(itemList,userName);
renderGroceryList(state.itemList[state.userName]);
document.querySelector('form').addEventListener('submit', handleSubmitForm);
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addItem(input.value);
    input.value = '';
}
function renderGroceryList(groceryList){
    let ul = document.querySelector('ul');
    //let li = document.createElement('li');
    let updatedGroceryView = '';
    for(let i=0;i<groceryList.length;i++){
        updatedGroceryView += 
        `<li class="grocery-list-item">
           <span class="list-item" id="myItem">${groceryList[i]}</span>
           <button name="editButton"><i class="fas fa-edit"></i></button>
          <button name="deleteButton" ><i class="fas fa-trash"></i></button></li>
         `
    }
    ul.innerHTML= updatedGroceryView;
}

function addItem(item) {
    // let ul = document.querySelector('ul');
    // let li = document.createElement('li');
    // li.innerHTML = `
    //     <span class="list-item" id="myItem">${item}</span>
    //     <button name="editButton"><i class="fas fa-edit"></i></button>
    //     <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    // `;
    // li.classList.add('grocery-list-item');
    // ul.appendChild(li);

   if(Array.isArray(state.itemList[state.userName])){
    state.itemList[state.userName].push(item);
   }else{
    state.itemList[state.userName]=[item];
   }
    localStorage.setItem('groceyItem',JSON.stringify(state.itemList));
    renderGroceryList(state.itemList[state.userName]);
}
function logOut(){
    localStorage.setItem('userName', '');
    window.location.replace('../index.html');

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