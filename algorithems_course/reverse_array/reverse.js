function reverse(arr){
    for (let left = 0; left < arr.length/2; left++) {
        var right=arr.length-1-left;
        var temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
    }
    return arr;
}
var origional=["a","b","c","d","e"];

console.log(origional);
console.log(reverse(origional));