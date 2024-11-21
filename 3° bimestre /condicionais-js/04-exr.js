function fluxoCaminhos(escolha) {
    switch (escolha) {
        case 1:
            console.log("Caminho A");
            break;
        case 2:
            console.log("Caminho B");
            break;
        case 3:
            console.log("Caminho C");
            break;
        case 4:
            console.log("Caminho D");
            break;
        case 5:
            console.log("Caminho E");
            break;
        case 6:
            console.log("Caminho F");
            break;
        case 7:
            console.log("Caminho G");
            break;
        case 8:
            console.log("Caminho H");
            break;
        default:
            console.log("Escolha inválida. Tente de novo.");
    }
}
let escolhaUsuario = Number(prompt("Digite um número de 1 a 8:"));
fluxoCaminhos(escolhaUsuario);
