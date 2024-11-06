function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4])); 
  console.log(sumArray([10, -10, 10])); 
  console.log(sumArray([3, 5, 13])); 
  console.log(sumArray([-7, -1, 7]));
  