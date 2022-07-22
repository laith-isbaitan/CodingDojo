function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    var avr=sum/arr.length;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>avr){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4