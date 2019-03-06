import { API } from './vendor/OBA-wrapper/js/index.js'
import { render } from './hero.js'

async function getBook(frabl) {
  const api = new API({
    key: '1e19898c87464e239192c8bfe422f280'
  })

  const data = await api.details(frabl)

  render(data)
}

export { getBook }
