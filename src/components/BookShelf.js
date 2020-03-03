import React from 'react';
import {getAll} from "../BooksAPI";
import BookList from "./BookList";

export default class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        console.log(this.props);
    }

    componentWillMount() {
        this.getBooksList();
    }

    getBooksList() {
        getAll().then((books) => {
                console.log(books);
                this.setState({books: books});
            }
        );
    }

    render() {
        return (
            <div style={this.styleShelf}>
                <h2 style={this.bookshelfTitle}>{this.props.currentShelf}</h2>
                <BookList bookList={this.state.books}/>
            </div>
        );
    }

    styleShelf = {
       height: '500px'
    };

    bookshelfTitle = {
        marginTop: '50px',
        marginLeft: '50px',
        display: 'flex'
    };


}
