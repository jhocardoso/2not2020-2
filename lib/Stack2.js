module.exports = class Stack {

    constructor() { // #data // Atributo privado - precisa colocar # em todos os "data" da estrutura
        this.data = {}  // Armazenamento
        this.count = 0  // Contagem
    }

    // Inserção
    push(value) {
        this.count++
        this.data[this.count] = value
    }

    // Remoção
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    // Verificação do topo da pilha ("olhadinha")
    peek() {
        return this.data[this.count]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.count
    }
}