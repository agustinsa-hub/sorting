function split(array) {
  let firstHalf = array.slice(0, Math.round(array.length / 2));
  let secondHalf = array.slice(Math.round(array.length / 2));

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let arrayFinal = [];
  const lenTotal = array1.length + array2.length;
  while (arrayFinal.length < lenTotal) {
    if (array1[0] > array2[0] || !array1[0]) {
      arrayFinal.push(array2[0]);
      array2.shift();
    } else {
      arrayFinal.push(array1[0]);
      array1.shift();
    }
  }

  return arrayFinal;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  let [array1, array2] = split(array);
  return merge(mergeSort(array1), mergeSort(array2));
}
