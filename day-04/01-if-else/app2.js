let idade = 32;
let taxaDeJuros = 0.10;

if (idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
} else if (idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08;
} else if (idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
} else{
    taxaDeJuros = 0.06;
}

console.log(taxaDeJuros)