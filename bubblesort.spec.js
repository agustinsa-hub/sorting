describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  let arr = [4, 1, 2, 3];
  it("un arreglo desordenado termina ordenado", function () {
    expect(bubbleSort(arr)).toEqual(arr.sort());
  });
  let arr2 = [4, 1, 2, 3];
  it("espiamos el swap", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort(arr2);
    expect(window.swap.calls.count()).toEqual(3);
  });
});
