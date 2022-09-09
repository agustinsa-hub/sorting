describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]); // tu código acá
  });
  it("es capaz de dividir el arreglo en dos partes siendo impar", function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5],
    ]); // tu código acá
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]); // testeá el algoritmo
  });
});

describe("MergeSort", function () {
  it("ordena correctamente el array dado", function () {
    expect(mergeSort([3, 5, 1, 8, 6, 7, 9, 0])).toEqual([
      0, 1, 3, 5, 6, 7, 8, 9,
    ]);
  });
});
