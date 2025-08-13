const url = require('url')
const address = 'https://www.meusite.com.br/cataog?produtos=cadeira'

const pardesUrl = new url.URL(address)

console.log(pardesUrl.host)

console.log(pardesUrl.pathname)

console.log(pardesUrl.search)

console.log(pardesUrl.searchParams)

console.log(pardesUrl.searchParams.get('produtos'))