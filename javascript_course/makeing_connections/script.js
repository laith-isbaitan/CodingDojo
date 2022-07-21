function changename(){
    var username=document.querySelector("#profile_user");
    username.innerHTML="laith isbaitan";
}
var newitm=3;
function remove(item){
    var item=document.querySelector(item);
    item.remove();
    item=document.querySelector("#item"+newitm);
    item.remove();
    newitm++;
}