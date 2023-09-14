function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  if (wholeArray.length > 1) {
    let mid = Math.floor(wholeArray.length / 2);
    for (let i = 0; i < mid; i++) {
      firstHalf.push(wholeArray[i]);
    }
    for (let i = mid; i < wholeArray.length; i++) {
      secondHalf.push(wholeArray[i]);
    }
  }
  /* tu código acá para definir el firstHalf y secondHalf array */

  return [firstHalf, secondHalf];
}

function Merge(arr1, arr2) {
  if (!arr2) {
    return arr1;
  }
  let mergedArray = []
  let indexArray1 = 0;
  let indexArray2 = 0;
  while (mergedArray.length != arr1.length + arr2.length) {
    if (indexArray1 == arr1.length || indexArray2 == arr2.length) {
      let toPush = indexArray1 == arr1.length ? arr2[indexArray2] : arr1[indexArray1];
      mergedArray.push(toPush);
      if (indexArray1 == arr1.length) indexArray2++;
      else if (indexArray2 == arr2.length) indexArray1++;
    }
    else if (arr1[indexArray1] <= arr2[indexArray2]) {
      mergedArray.push(arr1[indexArray1])
      indexArray1++;
    }
    else if (arr2[indexArray2] <= arr1[indexArray1]) {
      mergedArray.push(arr2[indexArray2])
      indexArray2++;
    }
  }
  return mergedArray;
}

function mergeSort(array) {
  if (array.length > 1) {
    let m = split(array);
    if (m[0].length + m[1].length == 2) {
      return Merge(m[0], m[1]);
    }
    else {
      let a = mergeSort(m[0]);
      let b = mergeSort(m[1]);
      return Merge(a, b);
    }
  }
  else return array;
}