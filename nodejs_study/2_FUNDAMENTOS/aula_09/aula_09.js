const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1', message: 'Qual a primeira nota? '
    },
    {
        name: 'p2', message: 'Qual a segunda nota? '
    }
])
.then(resp => {
    console.log(resp)
    const media = (parseInt(resp.p1) + parseInt(resp.p2)) / 2
    console.log(media)
})
.catch(e => console.log(e))