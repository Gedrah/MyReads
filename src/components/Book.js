import React from 'react';
import {update} from "../BooksAPI";

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateShelf(event) {
        update(this.props.book, event.target.value).then(() => {
            if (this.props.updateList) {
                this.props.updateList();
            }
        })
    }

    render() {
        const book = this.props.book;
        return (
            <div style={this.bookStyle}>
                <img style={this.bookImgStyle} src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title}/>
                <h4>{book.title ? book.title : ''}</h4>
                {
                    book.authors && book.authors.length > 0 ?
                        book.authors.map((author) => {return (<span>{author}  </span>)})
                    : ''
                }
                <select value={book.shelf} onChange={(event) => this.updateShelf(event)}>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        );
    }

    bookStyle = {
        width: 'auto',
        textAlign: 'center',
        padding: '20px',
    };

    bookImgStyle = {
        height: '100%'
    };

}
