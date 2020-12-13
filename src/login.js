function store(){

    var name = document.getElementById('name');
    
    if(name.value.length == 0){
        alert('Please enter user name');
    }else{
        localStorage.setItem('name', name.value);
        console.log("data entry")
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var userName = document.getElementById('userName');
    if(userName.value == storedName){
        alert('Welcome');
    }else{
        alert('Error on login');
    }
}