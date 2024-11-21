function allEquals(arr) {
    if (arr.length <= 1) {
      return true; 
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[0]) { 
        return false;
      }
    }
    return true; 
  }
  
  console.log(allEquals([1, 1, 1])); // Deve exibir: true
  console.log(allEquals([1, 2, 1])); // Deve exibir: false
  console.log(allEquals([5])); // Deve exibir: true
  console.log(allEquals([])); // Deve exibir: true
  