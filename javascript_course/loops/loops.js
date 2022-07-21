//odd nums
console.log("odd nums");
for(var i = 0; i<=20; i++){
    if(i%2 !=0){
        console.log(i);
    }
}
//Decreasing Multiples of 3
console.log("Decreasing Multiples of 3");
for(var i =100; i>=0; i--){
    if(i%3 ==0){
        console.log(i);
    }
}
//Print the sequence
console.log("print sequance");
for(var i=4; i>-4; i-=1.5) {
    console.log(i);
}
//Sigma
console.log("Sigma");
var sum=0;
for(var i=0; i<=100; i++){
    sum+=i;
}
console.log(sum);
//Factorial
console.log("Factorial");
var fac=1;
for(var i=1;i<=12;i++){
    fac *=i;
}
console.log(fac);