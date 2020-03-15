import React from 'react';
import NavBar from "../components/NavBar";
import BookShelf from "../components/BookShelf";
import {getAll} from "../BooksAPI";
import "../css/BooksPage.css"

export default class BooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelfs: []
        };
        this.getShelf = this.getShelf.bind(this);
        this.getBooksList = this.getBooksList.bind(this);
    }

    componentDidMount() {
        this.getBooksList();
    }

    getShelf(name, books) {
        return books.filter((book) => {
            if (book.shelf === name)
                return book;
            else
                return null;
        });
    }

    getBooksList() {
        getAll().then((books) => {
            localStorage.setItem('books', JSON.stringify(books));
            const currentlyReadingShelf = this.getShelf('currentlyReading', books);
            const wantToReadShelf = this.getShelf('wantToRead', books);
            const readShelf = this.getShelf('read', books);

            const shelfs = [];
            shelfs.push({books: currentlyReadingShelf, title: 'Currently Reading'});
            shelfs.push({books: wantToReadShelf, title: 'Want to read'});
            shelfs.push({books: readShelf, title: 'Read'});
            this.setState({shelfs: shelfs});
        });
    }

    render() {
        return (
            <div className="books-page">
                <NavBar/>
                <div className="list-books-content">
                    {
                        this.state.shelfs.map((shelf, index) => {
                            return <BookShelf key={index} currentShelf={shelf.title} books={shelf.books} updateList={this.getBooksList}/>
                        })
                    }
                </div>
            </div>
        );
    }
}
