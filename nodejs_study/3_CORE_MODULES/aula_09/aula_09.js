// renomear arquivo

const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoarquivo.txt'

fs.rename(arqAntigo, arqNovo, (e) => {
    if(e) {
        console.log(e)
        return
    }

    console.log('Arquivo editado!')
})