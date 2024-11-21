function mergeSort(array) {
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  if(array.length == 0) {
    return 'You need to give a non empty array';
  }
  else if(array.length == 1) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  let result = [];
  let [i, j] = [0, 0];

  while(i < leftArray.length && j < rightArray.length) {
    if(leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    }
    else {
      result.push(rightArray[j]);
      j++;
    }
  }

  while(i < leftArray.length) {
    result.push(leftArray[i]);
    i++;
  }

  while(j < rightArray.length) {
    result.push(rightArray[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([2, 4, 3, 5, 1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
