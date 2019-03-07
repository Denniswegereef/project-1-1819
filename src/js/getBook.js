import { API } from './vendor/OBA-wrapper/js/index.js'
import { render } from './hero.js'

const api = new API({
  key: '1e19898c87464e239192c8bfe422f280'
})

async function getBook(frabl) {
  const data = await api.details(frabl)

  render(data)
}

async function getMoreBooks(current) {
  return api
    .createStream('search/appel{3}')
    .then(res => Promise.all(res.promises))
}

async function dynamicBook(key) {
  console.log(key)
  return api
    .createStream(`search/${key}{20}`)
    .then(res => Promise.all(res.promises))
}

export { getBook, getMoreBooks, dynamicBook }
