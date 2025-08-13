const minimist = require('minimist') // ajuda a ler os args do process.argv

const args = minimist(process.argv.slice(2)) // pega apartir do terceiro elemento

console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log(nome)
console.log(profissao)