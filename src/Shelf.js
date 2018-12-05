import React from 'react'

import Book from './Book'

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {   
                    props.books.filter(book => {
                        return book.shelf === props.shelfid
                    }).map((book => {
                        return <Book key={book.id} 
                                        shelf={book.shelf} 
                                        book={book}
                                        updateBook={props.updateBook}></Book>
                    }))
                }
            </ol>
            </div>
        </div>
    )
}

export default Shelf