import React from 'react';
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import {search} from "../BooksAPI";
import "../css/SearchPage.css"

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.searchBooks = this.searchBooks.bind(this);
    }

    saveSearchResult(booksList) {
        const booksInShelf = JSON.parse(localStorage.getItem('books'));
        const searchListBooks = booksList.map((book) => {
            for (let i = 0; i < booksInShelf.length; i++) {
                if (booksInShelf[i].id === book.id) {
                    book.shelf = booksInShelf[i].shelf;
                }
            }
            return book;
        });
        this.setState({books: searchListBooks});
    }

    searchBooks(event) {
        if (event.target.value) {
            search(event.target.value).then((booksList) => {
                    if (booksList.error) {
                        this.setState({books: booksList.items})
                    } else {
                        this.saveSearchResult(booksList);
                    }
                }
            );
        } else {
            this.setState({books: []})
        }
    }

    render() {
        const books = this.state.books;
        return (
            <div className="search-page">
                <SearchBar searchBooks={this.searchBooks}/>
                <BookList bookList={books}/>
            </div>
        );
    }
}
