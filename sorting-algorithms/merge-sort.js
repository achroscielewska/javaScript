function merge(left, right) {
  let result = [];
  const lLength = left.length;
  const rLength = right.length;
  let l = 0;
  let r = 0;

  while (l < lLength && r < rLength) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return result.concat(left.slice(l).concat(right.slice(r)));

}

function mergeSort(arr) {
    const len = arr.length;

    if(len<2) return arr;

    const mid = Math.floor(len/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

let arrToMergeSort = [];
for( let i=0; i<10; i++) {
    arrToMergeSort[i] = Math.floor(Math.random()*100+1);
}
console.log("Array to merge sort");
console.log(arrToMergeSort);
console.log("Array after merge sort");
console.log(mergeSort(arrToMergeSort));
