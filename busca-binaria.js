// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordanado pelo critério de busca
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1
    // Math.floor(): retira as casas decimais de um número. 
    // Math.ceil() sempre arredonda pra cima    
    // Math.round() faz a regra da matemática. Até 4 pra baixo e acima de 5 pra cima.
    let meio = Math.floor((fim + inicio) / 2)

    // Verifica se o valor na posição média é o valor de busca
    if (valorBusca === lista[meio]) return meio
    else if (valorBusca < lista[meio]) {
        fim = meio - 1
    }
    else { //valorBusca > lista[meio]
        inicio = meio + 1
    }

}