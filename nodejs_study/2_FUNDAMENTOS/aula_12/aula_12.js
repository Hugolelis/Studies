const x = '10'

// if(!Number.isInteger(x)) throw new Error("X não é um número")

const nome = 'Hugo'

try {
    nome = 'Hugo de Lelis'
} catch(e) {
    console.log(`Erro: ${e}`)
}