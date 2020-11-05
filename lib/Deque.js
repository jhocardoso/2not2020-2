/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um dos seus lados
*/
module.exports = class Deque {
    constructor() {
        this.data = []
    }

    // Inserção no início
    insertFront(value) {
        this.data.unshift(value)
    }

    // Inserção no fim
    insertRear(value) {
        this.data.push(value)
    }

    // Remoção no início
    removeFront() {
        return this.data.shift()
    }

    // Remoção no fim
    removeRear() {
        return this.data.pop()
    }

    // "Olhadinha" no início
    peekFront() {
        return this.data[0]
    }

    // "Olhadinha" no final
    peekRear() {
        return this.data[this.data.length - 1]
    }

    // Tamanho do deque
    size() {
        return this.data.length
    }
}