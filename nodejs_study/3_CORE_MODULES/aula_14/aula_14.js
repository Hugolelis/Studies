// trabalhando com diretórios

const fs = require('fs')

if(!fs.existsSync('./minhapasta')) {
    console.log('Não existe, vamos criar a pasta!')
    fs.mkdirSync('minhapasta')
} else if(fs.existsSync('./minhapasta')) {
    console.log('Existe!')
}