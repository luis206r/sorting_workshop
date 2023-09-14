describe('Split Array function', function () {
  it('es capaz de dividir el arreglo en dos partes', function () {
    expect(split([5, 4, 3, 2])).toEqual([[5, 4], [3, 2]]);
  });
  it('es capaz de dividir un arreglo impar en dos partes', function () {
    expect(split([5, 4, 3, 2, 1])).toEqual([[5, 4], [3, 2, 1]]);
  });
});

describe('Merge', function () {
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
    expect(Merge([1, 5], [2, 6])).toEqual([1, 2, 5, 6]);
  });
  it('es capaz de combinar dos Arreglos de diferente tamaño ordenados en uno solo ordenado', function () {
    expect(Merge([1, 5, 7], [2, 6])).toEqual([1, 2, 5, 6, 7]);
  });
});

describe('mergeSort', function () {
  it('funciona para arreglos impares', function () {
    expect(mergeSort([5, 1, 9, 2, 3, 7, 0])).toEqual([0, 1, 2, 3, 5, 7, 9]);
  });
  it('funciona para arreglos pares', function () {
    expect(mergeSort([5, 1, 2, 3, 7, 0])).toEqual([0, 1, 2, 3, 5, 7]);
  });
});