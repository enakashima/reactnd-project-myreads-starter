import React from 'react'

import { update } from './BooksAPI'

class Book extends React.Component {

    updateBook = (e) => {
        console.log('Updating shelf')
        let value = e.target.value
        update(this.props.book, value)
            .then(res => {
                console.log(res)
                if(this.props.moveToAnotherShelf) {
                    this.props.moveToAnotherShelf(this.props.book, this.props.book.shelf, value)
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.shelf}
                                onChange={this.updateBook}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{(this.props.book.authors) && this.props.book.authors.join('; ') }</div>
                </div>
            </li>
        )
    }
}

export default Book