import React from 'react';
import BookList from "./BookList";
import '../css/BookShelf.css'

export default class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
                <BookList updateList={this.props.updateList} bookList={this.props.books}/>
            </div>
        );
    }
}
