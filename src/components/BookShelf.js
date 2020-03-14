import React from 'react';
import BookList from "./BookList";

export default class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        console.log(this.props);
    }

    render() {
        return (
            <div style={this.styleShelf}>
                <h2 style={this.bookshelfTitle}>{this.props.currentShelf}</h2>
                <BookList updateList={this.props.updateList} bookList={this.props.books}/>
            </div>
        );
    }

    styleShelf = {
        height: '500px',
    };

    bookshelfTitle = {
        marginTop: '50px',
        marginLeft: '50px',
        display: 'flex'
    };


}
