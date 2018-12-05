import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Bookshelf extends React.Component {

  moveToAnotherShelf = (bookToMove, to) => {
    console.log('moving to another shelf')
    console.log(bookToMove, to)

    let books = this.props.books

    books = this.props.books.map(book => {
      if(book.id === bookToMove.id) {
        book.shelf = to
      }
      return book
    })
    console.log('trying to update the state')
    this.props.update(books)
  }

  render() {
      return (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf shelfid='currentlyReading'
                     title='Currently Reading'
                     books={this.props.books}
                     updateBook={this.props.updateBook}/>
              <Shelf shelfid='wantToRead'
                     title='Want to Read' 
                     books={this.props.books}
                     updateBook={this.props.updateBook}/>
              <Shelf shelfid='read'
                     title='Read'
                     books={this.props.books}
                     updateBook={this.props.updateBook}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )
  }
}

export default Bookshelf

