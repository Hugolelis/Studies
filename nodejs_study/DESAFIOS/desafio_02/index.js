// interno
const media = require('./modules/media_module').media

// externo
const chalk = require('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)


const nota1 = args['nota1']
const nota2 = args['nota2']
const nota3 = args['nota3']
const nota4 = args['nota4']

const myMedia = media(nota1, nota2, nota3, nota4)

if(myMedia >= 6) {
    console.log(chalk.green(`Parabéns você foi aprovado com média: ${myMedia}`))
} else if(myMedia < 6 && myMedia >= 3) {
    console.log(chalk.yellow(`Que pena você foi para recuperação com média: ${myMedia}`))
} else {
    console.log(chalk.red(`Que pena você foi reprovado com média: ${myMedia}`))
}
