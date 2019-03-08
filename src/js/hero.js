import { getMoreBooks, dynamicBook } from './getBook.js'
import { cleanBook } from './cleanItems.js'

let hero = document.getElementById('hero')
let main = document.getElementById('main')
let currentDepth = 0
let currentBook
let cleanOne
let cleanTwo
let cleanThree

// select the target node
const config = { attributes: true, childList: true, characterData: true }
const observer = new MutationObserver(setListener).observe(hero, config)
const mainObserver = new MutationObserver(setDynamicListenered).observe(
  main,
  config
)

async function render(data) {
  hero.innerHTML = ''

  currentBook = await cleanBook(data.aquabrowser)

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
}

function setListener() {
  setTimeout(function() {
    let button = document.getElementById('next-button')
    button.addEventListener('click', createNewDepth)
  }, 0)
}

async function createNewDepth(e, lastbook) {
  currentDepth++

  this.classList.add('loading-spinner')
  this.innerHTML = 'Laden'
  e.preventDefault()
  //
  const keyOne = findRandomKey(currentBook.possibleKeys())
  const dataOne = await dynamicBook(keyOne)

  cleanOne = await cleanBook(
    dataOne[0][Math.floor(Math.random() * dataOne[0].length) + 1],
    currentBook
  )

  const keyTwo = findRandomKey(currentBook.possibleKeys())
  const dataTwo = await dynamicBook(keyTwo)

  cleanTwo = await cleanBook(
    dataTwo[0][Math.floor(Math.random() * dataTwo[0].length) + 1],
    currentBook
  )

  const keyThree = findRandomKey(currentBook.possibleKeys())
  const dataThree = await dynamicBook(keyThree)

  cleanThree = await cleanBook(
    dataThree[0][Math.floor(Math.random() * dataThree[0].length) + 1],
    currentBook
  )

  //let stream = [cleanBook(dataOne), cleanBook(dataTwo), cleanBook(dataThree)]

  this.remove()

  let items = [cleanOne, cleanTwo, cleanThree]
    .map((item, index) => {
      console.log(item)
      return `
      <article class="recco-item">
        <img src="https://v19.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/${
          item.imageURL
        }&token=c1322402" alt=""/>

        <h2>${item.title}</h2>

        ${index === 0 ? `<h3>${keyOne}</h3>` : ''}
        ${index === 1 ? `<h3>${keyTwo}</h3>` : ''}
        ${index === 2 ? `<h3>${keyThree}</h3>` : ''}

        <a class="clickbutton" href="${
          item.detailPage
        }" target="_blank">Bekijk boek</a>
      </article>
      `
    })
    .join('')

  const markup = `
  <div id="depth-${currentDepth}">
    <h1>New element ${currentDepth}</h1>
    ${items}
    <button id="button-${currentDepth}">Go to ${currentDepth + 1}</button>
  </div>`

  const markupnew = `
  <section class="recco" id="depth-${currentDepth}">
    <header class="recco-header">
      <h3>Drie aansluitende items</h3>
      <h4>Kies een item om verder te duiken</h4>
    </header>

    <div class="recco-books">
    ${items}

    <button id="button-${currentDepth}">Duik dieper</button>
  </section>
  `

  main.insertAdjacentHTML('beforeend', markupnew)
}

function setDynamicListenered() {
  location.hash = '#depth-' + currentDepth
  let currentButton = document.getElementById(`button-${currentDepth}`)
  currentButton.addEventListener('click', createNewDepth)

  let items = document.getElementById(`depth-${currentDepth}`)

  let buttons = items.getElementsByClassName('clickbutton')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (i === 0) {
        changeCurrent(currentOne)
      }
    })
  }
}

function changeCurrent(data) {
  console.log(data)
}

const findRandomKey = items => {
  return items[
    Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]
  ]
}

export { render }
