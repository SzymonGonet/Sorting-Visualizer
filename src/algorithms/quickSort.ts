export function quickSort(
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length
): Array<number> {
  if (start < end) {
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
  return arr;
}

function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length
) {
  let pivot: number = arr[start];
  let swapIndex: number = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
