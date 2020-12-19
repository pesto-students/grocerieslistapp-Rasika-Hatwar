const userList = JSON.parse(localStorage.getItem('userList'));
const userName = localStorage.getItem('userName');
const itemList = JSON.parse(localStorage.getItem('groceyItem'));
console.log(userList,userName);

if(userName === null || userList=== null || itemList===null){
    localStorage.setItem('userName','');
    localStorage.setItem('userList',JSON.stringify([]) );
    localStorage.setItem('groceyItem',JSON.stringify({}));
}
if(userName !== '' && userName != null){
    location.replace("/views/home.html");
}
function store(){
    
    var name = document.getElementById('name');
    if(name.value.length == 0){
        alert('Please enter user name');
    }
    else{
        localStorage.setItem('userName', name.value);
        location.replace("/views/home.html");
    }
}


