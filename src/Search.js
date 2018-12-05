import React from 'react'
import {Link} from 'react-router-dom'
import DebounceInput from 'react-debounce-input'
import {search} from './BooksAPI'
import Book from './Book'

class Search extends React.Component {


    search = (e) => {
        let query = e.target.value
        
        if(query) {
            search(query).then(res => {
                if(!res.error) {
                    this.props.updateSearchResults(res)
                }else {
                    this.props.updateSearchResults([])
                }
            })
        }else {
            this.props.updateSearchResults([])
        }
    }

    componentWillUnmount() {
        this.props.updateSearchResults([])
    }

    findBookShelf(book) {
        let bookOnShelf = this.props.booksOnShelves.find(bookOnShelf => {
            return book.id === bookOnShelf.id
        }) 
        if(bookOnShelf) {
            return bookOnShelf.shelf
        }else {
            return 'none'
        }
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
                <DebounceInput 
                    type="text"
                    placeholder="Search by title or author"
                    onChange={this.search}
                    debounceTimeout={300}/>    
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {
                    this.props.searchResults.map(item => {
                        return <Book key={item.id} 
                                     book={item} 
                                     shelf={this.findBookShelf(item)} 
                                     updateBook={this.props.updateBook}/>
                    })
                }
            </ol>
            </div>
            </div>
        )
    }
}

export default Search