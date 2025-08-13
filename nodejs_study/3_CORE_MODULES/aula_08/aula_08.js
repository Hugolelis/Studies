// excluir arquivo

const fs = require('fs')

fs.unlink('arquivo.txt', (e) => {
    if(e) {
        console.log(e)
        return
    }

    console.log('Arquivo removido!')
})