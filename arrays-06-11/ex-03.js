function contaOcorr(arr, element) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++; 
      }
    }
    return count; 
  }
  
  console.log(contaOcorr([1, 2, 2, 3, 2, 1], 2)); // Deve exibir: 3
  console.log(contaOcorr(["apple", "banana", "apple"], "apple")); // Deve exibir: 2
  console.log(contaOcorr(["fruta", "legume", "verdura", "berinjela"], "berinjela")); // Deve exibir: 2
  console.log(contaOcorr(["bolacha", "bolacha", "bolacha"], "biscoito")); // Deve exibir: 2
  
  
  