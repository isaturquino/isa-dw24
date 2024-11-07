function removeDuplicates(vetor) {
    let unicoArray = [];
  
    for (elemento of vetor) {
      if (!unicoArray.includes(elemento)) {
        unicoArray.push(elemento); 
      }
    }
  
    return unicoArray; 
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates([1, 2, 2, 5, 1, 3, -3])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
  