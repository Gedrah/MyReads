import React from 'react';
import Book from "./Book";
import '../css/BookList.css'

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="books-list">
                <ol className="books-grid">
                    {
                        this.props.bookList.map((book, index) => {
                            return (
                                <Book updateList={this.props.updateList} key={index} book={book}/>
                            )
                        })
                    }
                </ol>
            </div>
        );
    }
}
