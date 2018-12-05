import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const Bookshelf = (props) => {
    
  return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf shelfid='currentlyReading'
                  title='Currently Reading'
                  books={props.books}
                  updateBook={props.updateBook}/>
          <Shelf shelfid='wantToRead'
                  title='Want to Read' 
                  books={props.books}
                  updateBook={props.updateBook}/>
          <Shelf shelfid='read'
                  title='Read'
                  books={props.books}
                  updateBook={props.updateBook}/>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )

}

export default Bookshelf

