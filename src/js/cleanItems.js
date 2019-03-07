import { dynamicBook } from './getBook.js'

const cleanBook = async book => {
  // Import handles

  // title +
  // authors +
  // branch/holdings X
  // summaries +
  // detail page +
  // frabl  X
  // ppn X
  // languages
  // subjectsX
  // summariesX
  return {
    titles: book.titles.title._text,
    title:
      book.titles && book.titles['title'] && book.titles['title']._text
        ? book.titles['title']._text
        : 'no title',
    author: book.authors['main-author']._text,
    description:
      book.summaries && book.summaries.summary && book.summaries.summary._text
        ? book.summaries.summary._text
        : 'no summary available',
    detailPage: book['detail-page']._text,
    frabl: book.frabl._text,
    imageURL: book.identifiers['ppn-id']._text,
    subject:
      book.subjects &&
      book.subjects['topical-subject'] &&
      book.subjects['topical-subject']._text
        ? book.subjects['topical-subject']._text
        : null,
    possibleKeys: function() {
      return {
        subject: this.subject,
        author: this.author
      }
    }
  }
  //
  // const randomKey = findRandomKey(newBook.possibleKeys())
  // let data = await dynamicBook(randomKey)
  //
  // console.log(data)
}

// const findRandomKey = items => {
//   return items[
//     Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]
//   ]
// }

export { cleanBook }
