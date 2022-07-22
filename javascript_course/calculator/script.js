var display=document.querySelector("#display");
var num1="";
var num2="";
var op="";
function press(num){
    num1+=num;
    display.innerHTML=num1;
}
function clr(){
    num1="";
    num2="";
    op="";
    display.innerHTML=0;
}
function setOP(operation){
    num2=num1;
    num1="";
    op=operation;
}
function calculate(){
    var res;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    if(op=="+"){
        res=num1+num2;
    }else if(op=="-"){
        res=num2-num1;
    }else if(op=="/"){
        res=num2/num1;
    }else if(op=="*"){
        res=num1*num2;
    }else{
        clr();
    }
    console.log(res);
    num1=res;
    op="";
    display.innerHTML=num1;
}