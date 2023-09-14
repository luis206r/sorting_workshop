function bubbleSort(array) {
  if (array.length == 0) return [];
  else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, first, second) {
  if (array[first] > array[second]) {
    let temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
}