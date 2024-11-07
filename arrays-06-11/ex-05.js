function removeDuplicates(arr) {
    let unicoArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!unicoArray.includes(arr[i])) {
        unicoArray.push(arr[i]); 
      }
    }
  
    return unicoArray; 
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates([1, 2, 2, 5, 1, 3, -3])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
  