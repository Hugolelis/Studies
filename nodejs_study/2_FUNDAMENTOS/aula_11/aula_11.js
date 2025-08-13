const fs = require('fs')

console.log('Inicio')

// sincrono
fs.writeFileSync('arquivo.txt', 'oi')

// assincrono
fs.writeFile('arquivo.txt', 'oi', (e) => {
    setTimeout(() => {
        console.log('Arquivo criado')
    }, 1000);
})

console.log('Fim')