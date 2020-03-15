import React from 'react';
import {update} from "../BooksAPI";
import '../css/Book.css'

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

    goToPageDetail() {
        window.location = this.props.book.previewLink;
    }


    render() {
        const book = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div onClick={() => this.goToPageDetail()} className="book-cover"
                             style={{width: 128, height: 188, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
                             }}/>

                    </div>
                    <div>
                        <select value={book.shelf} onChange={(event) => this.updateShelf(event)}>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                    <div className="book-title">{book.title ? book.title : ''}</div>
                    <div className="book-authors">
                        {
                            book.authors && book.authors.length > 0 ?
                                book.authors.map((author, index) => {return (<span key={index}>{author}  </span>)})
                                : ''
                        }

                    </div>
                </div>
            </li>
        );
    }
}
