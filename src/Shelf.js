import React from 'react'

import Book from './Book'

class Shelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {   
                        this.props.books.filter(book => {
                            return book.shelf === this.props.shelfid
                        }).map((book => {
                            return <Book key={book.id} 
                                         shelf={book.shelf} 
                                         book={book}
                                         updateBook={this.props.updateBook}></Book>
                        }))
                    }
                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf