// Enjoy JavaScript with ES6 features :)
for(var i=1; i<=100; i++){
    var x="";
    if(i % 3 ==0 || i % 5 ==0){
        if(i % 3 ==0){
            x +="Fizz";
        }
        if(i % 5 ==0){
            x +="Buzz";
        }
            console.log(x);
    }else{
            console.log(i);
    }

}