import { cleanBook } from './cleanItems.js'
import { renderNewBooks } from './followup.js'

async function renderSingleBook(data) {
  let hero = document.getElementById('hero')

  let currentBook = await cleanBook(data.aquabrowser)

  hero.innerHTML = ''

  const markup = `
  <div class="hero">
    <img src="https://v19.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/${
      currentBook.imageURL
    }&token=c1322402" alt=""/>
    <div class="content">
      <h2>${currentBook.title}</h2>
      <h3>${currentBook.author}</h3>
      <p>${currentBook.description}<p>
    </div>

    <button id="next-button">Start de duik</button>
  </div>
  `

  hero.innerHTML = markup

  setListener(currentBook)
}

function setListener(currentBook) {
  let button = document.getElementById('next-button')
  let self = this

  button.addEventListener('click', () => {
    renderNewBooks(button, currentBook)
  })
}

export { renderSingleBook }
