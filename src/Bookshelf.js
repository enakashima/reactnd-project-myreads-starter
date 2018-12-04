import React from 'react'
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import Shelf from './Shelf'

class Bookshelf extends React.Component {

  state = {
    shelves: {
      currentlyReading: {
        title: 'Currently Reading',
        key: 'currentlyReading',
        books: []
      },
      wantToRead: {
        title: 'Want to Read',
        key: 'wantToRead',
        books: []
      },
      read: {
        title: 'Read',
        key: 'read',
        books: []
      }
    }
  }

  constructor(props) {
    super(props)
    this.loadBookshelves()
  }

  moveToAnotherShelf = (bookToMove, from, to) => {
    console.log('moving to another shelf')
    console.log(bookToMove, from, to)

    let shelves = this.state.shelves
    
    shelves[from].books = shelves[from].books.filter(book => {
      console.log('filter', book.id !== bookToMove.id)
      return book.id !== bookToMove.id
    })

    if(to !== 'none') {
      bookToMove.shelf = to
      shelves[to].books.push(bookToMove)
    }

    this.setState({shelves: shelves})
  }

  loadBookshelves = () => {
    let shelves = this.state.shelves
    getAll().then(res => {
      console.log('load bookshelves')
      console.log('getAll', res)
      res.forEach(book => {
        shelves[book.shelf].books.push(book)
      })

      this.setState({shelves: shelves})
    })
  }

  render() {
      return (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {Object.keys(this.state.shelves).map(key => {
                return <Shelf key={this.state.shelves[key].key} 
                              title={this.state.shelves[key].title} 
                              books={this.state.shelves[key].books}
                              moveToAnotherShelf={this.moveToAnotherShelf}/>
              })} 
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

