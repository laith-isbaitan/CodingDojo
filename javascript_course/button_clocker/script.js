// login button update
function login_status(element){
    if(element.innerText=="login"){
        element.innerText="logout";
    }else{
        element.innerText="login";
    }
}
// aside button
function remove(element){
    element.remove();
}
// like button 
function like(element){
    alert("Ninja was liked");
}