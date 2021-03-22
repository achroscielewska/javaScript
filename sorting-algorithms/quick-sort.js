function quickSort(arr) {
    if(arr.length===0) return [];
 
    let left = [];
    let right = [];
    const pivot = arr[0];

    for (let i=1; i<arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
};

let a = [];
for( let i=0; i<10; i++) {
    a[i] = Math.floor(Math.random()*100+1);
}
console.log("Array to quick sort");
console.log(a);
console.log("Array after quick sort");
console.log(quickSort(a));