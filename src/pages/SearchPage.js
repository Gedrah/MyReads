import React from 'react';
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import {search} from "../BooksAPI";

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.searchBooks = this.searchBooks.bind(this);
    }


    searchBooks(event) {
        if (event.target.value) {
            search(event.target.value).then((booksList) => {
                    console.log(booksList);
                    if (booksList.error) {
                        this.setState({books: booksList.items})
                    } else {
                        this.setState({books: booksList});
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
            <div>
                <SearchBar searchBooks={this.searchBooks}/>
                <BookList bookList={books}/>
            </div>
        );
    }
}
