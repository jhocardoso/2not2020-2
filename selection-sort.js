function selectionSort (vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    // Função que encontra o menor número em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO do menor valor encontrado
    function encontrarMenor (vetor, inicio) {
        let posMenor = inicio
        for (let i = inicio; i < vetor.length; i++) {
            if (vetor[i] < vetor[posMenor]) posMenor = i
            comparacoes++
        }
        return posMenor
    }

    // O for externo vai até a PENÚLTIMA posição
    for (i = 0; i < vetor.length - 1; i++) {
        passadas++

        // Busca o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        // Caso o valor encontrado seja menos que o valor atual,
        // procede-se à troca
        comparacoes++
        if (vetor[posMenor] < vetor[i]) {
            // Permuta de valores usando desestruturação de vetor
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

console.time('nums')
selectionSort(nums)
console.timeEnd('nums')

console.log(nums)

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
selectionSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)