let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularNotas(atletas){
    
    for (let i = 0; i < atletas.length; i ++){

        let nome = atletas[i].nome;
        let notas = atletas[i].notas;

        // ordenação de notas

        let notasOrdenadas = [...notas].sort((a, b) => a - b);

        // remoção de menor e maior (fica somente as do meio)

        let notasValidas = notasOrdenadas.slice(1, 4); 

        // calculo de média

        let soma = 0;
        notasValidas.forEach(n => soma += n);
        let media = soma / notasValidas.length;

        // exibição
        console.log(`Atleta: ${nome}`);
        console.log(`Notas obtidas: ${notas.join(", ")}`);
        console.log(`Média válida: ${media}`);
        console.log(""); // espaço em branco
    }
}

calcularNotas(atletas);