import React from 'react'
import {Link} from 'react-router-dom'
import {search} from './BooksAPI'
import Book from './Book'

class Search extends React.Component {

    state={
        results: []
    }

    updateResults = null

    search = (e) => {
        let query = e.target.value
        clearTimeout(this.updateResults);
        this.updateResults = setTimeout(() => {
            if(query) {
                console.log(query)
                search(query).then(res => {
                    console.log(res)
                    if(!res.error) {
                        this.setState({results: res})
                    }else {
                        this.setState({results: []})
                    }
                })
            }else {
                this.setState({results: []})
            }
        }, 500)
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.search}/>
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {
                    this.state.results.map(item => {
                        return <Book key={item.id} book={item} />
                    })
                }
            </ol>
            </div>
            </div>
        )
    }
}

export default Search