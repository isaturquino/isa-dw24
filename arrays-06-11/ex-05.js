function removeDuplicates(arr) {
    let unicoArray = []; // Array para armazenar os elementos únicos
  
    // Percorre o array original
    for (let i = 0; i < arr.length; i++) {
      // Verifica se o elemento ainda não está no array 'uniqueArray'
      if (!unicoArray.includes(arr[i])) {
        unicoArray.push(arr[i]); // Adiciona o elemento ao array 'uniqueArray' se não for duplicado
      }
    }
  
    return unicoArray; // Retorna o array com os elementos únicos
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates([1, 2, 2, 5, 1, 3, -3])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
  