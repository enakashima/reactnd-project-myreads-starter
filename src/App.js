import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

import { getAll, update } from './BooksAPI'
import BookShelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.loadBookshelf()
  }

  state = {
    booksOnShelves: [],
    searchResults: [],
  }
  
  loadBookshelf = () => {
    getAll().then(res => {
      this.updateBooksOnShelves(res)
    })
  }

  updateBook = (book , toShelf) => {
    console.log('moving', book, toShelf)
    update(book, toShelf)
      .then(() => {
        this.loadBookshelf()
      })
      .catch(err => {
          console.error(err)
      })
  }

  updateBooksOnShelves = (books) => {
    this.setState({booksOnShelves: books})
  }

  updateSearchResults = (results) => {
    this.setState({searchResults: results})
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf books={this.state.booksOnShelves} 
                     updateBooksOnShelves={this.updateBooksOnShelves}
                     updateBook={this.updateBook}/> 
        )}/>
        <Route exact path='/search' render={() => (
          <Search searchResults={this.state.searchResults} 
                  updateSearchResults={this.updateSearchResults} 
                  booksOnShelves={this.state.booksOnShelves} 
                  updateBooksOnShelves={this.updateBooksOnShelves}
                  updateBook={this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
