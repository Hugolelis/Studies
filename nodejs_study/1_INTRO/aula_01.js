console.log('Hello World Node!')

// importando modulo

const fs = require('fs') // file system 

// caminho | formatação | callback

fs.readFile('1_INTRO/arquivo.txt', 'utf8', (e, data) => {
    if(e) {
        console.log(e)
    }

    console.log(data)
})