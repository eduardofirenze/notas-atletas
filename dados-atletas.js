class Atletas{
    constructor(nome, sobrenome, idade, peso, altura, notas){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas; 
    }


calcularCategoria(){
    
    if (this.idade >= 9 && this.idade <= 11){
        return "Infantil";
    } else if (this.idade == 12 || this.idade == 13){
        return "Juvenil";
    } else if (this.idade == 14 || this.idade == 15){
        return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30){
        return "Adulto";
    } else{
        return "Sem categoria";
    }
}

calcularImc(){
    return this.peso / (this.altura * this.altura);
}

calcularMediaValida(){
    // ordenar notas
    let notasOrdenadas = this.notas.sort((a, b) => a - b);
    
    // remover maior e menor
    let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    // calcular média
    let media = notasValidas.reduce((total, nota) => total + nota, 0) / notasValidas.length;

    return media;
}

obtemNomeAtleta(){
    return this.nome;
}

obtemIdadeAtleta(){
    return this.idade;
}

obtemPesoAtleta(){
    return this.peso;
}

obtemNotasAtleta(){
    return this.notas;
}

obtemCategoria(){
    return this.calcularCategoria();
}

obtemImc(){
    return this.calcularImc();
}

obtemMediaValida(){
    return this.calcularMediaValida();
}
}

// exemplo

const atleta = new Atletas(
    "Cesar",
    "Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemImc()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);