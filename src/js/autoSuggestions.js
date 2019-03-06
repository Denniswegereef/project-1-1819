'use strict'
import { getBook } from './getBook.js'

let autoSuggestionsBox = document.getElementById('auto-suggestions-box')

async function getAutoComplete(url) {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let data

  return await fetch(proxyUrl + url)
    .then(res => {
      return res.text()
    })
    .then(res => {
      data = res
      let dataTitles = JSON.parse(data).titles

      let matchingData = data.match(/"frabl":\s*\[?(\d+)\]?/g)
      let firstNumbers = matchingData.map(item => item.match(/\d+/)[0])

      return dataTitles.map((item, index) => {
        item.frabl = firstNumbers[index]
        return item
      })
    })
    .catch(e => e)
}

async function autocomplete(value) {
  if (value.length < 1) {
    renderData(value, 'clear')
    return
  }
  let data = await getAutoComplete(
    `https://autocomplete.aquabrowser.com/v1/oba/search?q=${value}&alpha=0.8&hl=true&p=oba`
  )

  renderData(data)
}

function createMarkUp(title, data) {
  //console.log(data)
  return `<li><h5>${title}</h5>
  </li>${data
    .map(
      item =>
        `<li class='auto-suggestions-item' data-frabl='${item.frabl}'>${
          item.title
        }</li>`
    )
    .join('')}`
}

function renderData(data, handle) {
  autoSuggestionsBox.innerHTML = ''

  if (handle === 'clear') {
    return
  }

  autoSuggestionsBox.innerHTML = createMarkUp('Titles', data)
  handleEvents()
}

function handleEvents() {
  let items = document.getElementsByClassName('auto-suggestions-item')

  for (let i of items) {
    i.addEventListener('click', getItem)
  }
}

async function getItem() {
  await getBook(this.dataset.frabl)
}

export { autocomplete }
