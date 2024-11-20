function fibonacci(n) {
  let array = [0, 1];

  if(n <= 0) {
    console.log('You need to give a number greater than 0!');
  }
  else if(n == 1) {
    return array[0];
  }
  else if(n == 2) {
    return array;
  }
  else {
    for(let i = 2; i < n; i++) {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }
  return array;
}

console.log(fibonacci(8));
console.log(fibonacci(5));
console.log(fibonacci(10));
