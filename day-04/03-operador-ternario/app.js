let ehBomPagador = false;
let nome = "Maria";

if (ehBomPagador){
    console.log('Bom Pagador');
} else{
    console.log('Não é bom pagador');
}

console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador" : " não é bom pagador"));