# Notas dos Atletas

Projeto desenvolvido para avaliar atletas de uma competição de ginástica artística, calculando a média válida baseada nas três notas centrais.

##  Sobre o Projeto

Cada atleta recebe cinco notas de diferentes jurados, variando de **1 a 10**. Para o cálculo da média válida:

* A **maior** e a **menor** nota são descartadas.
* A média é feita utilizando apenas as **três notas do meio**.

Este projeto foi desenvolvido em **JavaScript**, seguindo as orientações do desafio DEVstart.

---

## Estrutura da Entrada

A aplicação recebe um array de objetos, cada um representando um atleta:

```js
let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];
```

---

## Lógica da Solução

Para cada atleta, o programa:

1. Ordena as notas em ordem crescente.
2. Remove a menor e a maior nota.
3. Calcula a média das três notas restantes.
4. Exibe no console:

   * Nome do atleta
   * Todas as notas obtidas
   * Média válida

---

## Código da Solução

```js
function calcularNotas(atletas) {

    for (let i = 0; i < atletas.length; i++) {

        let nome = atletas[i].nome;
        let notas = atletas[i].notas;

        // Ordena as notas
        let notasOrdenadas = [...notas].sort((a, b) => a - b);

        // Remove a menor e a maior
        let notasValidas = notasOrdenadas.slice(1, 4);

        // Calcula média
        let soma = 0;
        notasValidas.forEach(n => soma += n);
        let media = soma / notasValidas.length;

        // Exibe o resultado
        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notas.join(",")}`);
        console.log(`Média Válida: ${media}`);
        console.log("");
    }
}

calcularNotas(atletas);
```

---

## ▶Como Executar

1. Copie o código para um arquivo chamado **notas-atletas.js**.
2. Execute no terminal usando Node.js:

```bash
node notas-atletas.js
```

3. Confira a saída no console.

---

## Publicação no GitHub

1. Crie um repositório chamado **notas-atletas**.
2. Envie o arquivo **notas-atletas.js** e este **README.md**.
3. Deixe o repositório público.
4. Envie o link conforme solicitado no desafio.

---

## Considerações Finais

Este projeto reforça conhecimentos fundamentais de:

* Manipulação de arrays
* Métodos importantes como **sort**, **slice**, **forEach**
* Laço **for**
* Lógica de cálculo e ordenação

