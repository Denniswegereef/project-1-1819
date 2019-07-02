import { dynamicBook } from './getBook.js'

const cleanBook = async (book, currentBook) => {
  // Import handles
  console.log(book)
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
  if (book === undefined) {
    return currentBook
  }

  return {
    title:
      book.titles && book.titles.title && book.titles.title._text
        ? book.titles.title._text
        : 'no title',
    author:
      book.authors &&
      book.authors['main-author'] &&
      book.authors['main-author']._text
        ? book.authors['main-author']._text
        : 'no author',
    description:
      book.summaries && book.summaries.summary && book.summaries.summary._text
        ? book.summaries.summary._text
        : 'no summary available',
    detailPage:
      book['detail-page'] && book['detail-page']._text
        ? book['detail-page']._text
        : 'http://denniswegereef.nl',
    frabl: book.frabl._text,
    imageURL:
      book.identifiers &&
      book.identifiers['ppn-id'] &&
      book.identifiers['ppn-id']._text
        ? book.identifiers['ppn-id']._text
        : 'noID',
    location:
      book.branches &&
      book.branches.branch &&
      book.branches.branch[0] &&
      book.branches.branch[0]._attributes &&
      book.branches.branch[0]._attributes.translation
        ? book.branches.branch[0]._attributes.translation
        : 'Amsterdam',
    year:
      book.publication && book.publication.year && book.publication.year._text
        ? book.publication.year._text
        : 2019,
    subject:
      book.subjects &&
      book.subjects['topical-subject'] &&
      book.subjects['topical-subject']._text
        ? book.subjects['topical-subject']._text
        : null,
    possibleKeys: function() {
      return {
        subject: this.subject,
        author: this.author,
        location: this.location,
        year: this.year
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
