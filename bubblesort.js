function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  }
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      //compari ++
      if (array[i] > array[i + 1]) {
        swap(array, i); //swapcoun ++
      }
    }
    return array;
  }
}

function swap(arreglo, indice) {
  let a = arreglo[indice];
  let b = arreglo[indice + 1];
  arreglo[indice] = b;
  arreglo[indice + 1] = a;
}
