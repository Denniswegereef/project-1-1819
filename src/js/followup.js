import { getMoreBooks, dynamicBook } from './getBook.js'
import { cleanBook } from './cleanItems.js'

let currentDepth = 0

function renderNewBooks(button, book) {
  // Remove button
  button.remove()
  renderItems(book)
}

async function renderItems(book) {
  currentDepth++
  let main = document.getElementById('main')

  // Get books
  let threeBooks = await searchNewBooks(book)

  let array = threeBooks[0]

  console.log(threeBooks)

  // Append data
  main.insertAdjacentHTML('beforeend', `<h1>${currentDepth}`)

  // Scroll to hash
  location.hash = '#depth-' + currentDepth
}

function searchNewBooks(book) {
  return dynamicBook(book.subject).then(res => {
    return cleanBook(res[0][2])
  })
}

export { renderNewBooks }
