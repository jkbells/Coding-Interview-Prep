function swap(a, b, arr){
  let tmp = arr[a];
  arr[a]  = arr[b];
  arr[b]  = tmp;
}


function selectionSort(array) {
  // Only change code below this line
  for (let i = 0 ; i < array.length -1 ; i++){
    let min = i;
    for (let j = i + 1 ; j < array.length ; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min , array);
  }
  return array;
  // Only change code above this line
}