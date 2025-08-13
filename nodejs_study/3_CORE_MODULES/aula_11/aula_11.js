// detalhes de arquivos

const fs = require('fs')

fs.stat('novoarquivo.txt', (e, stats) => {
    if(e) {
        console.log(e)
        return
    }

    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})