function insertionSort(array) {
  // Only change code below this line
  for (let i = 1; i < array.length; i++){
    let curr = array[i];
    for(var j = i -1 ; j>= 0 && array[j] > curr; j--){
      array[j+ 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
  // Only change code above this line
}