import React from 'react';
import Book from "./Book";

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={this.listStyle}>
                {
                    this.props.bookList.map((book, index) => {
                        return <Book updateList={this.props.updateList} key={index} book={book}/>
                    })
                }
            </div>
        );
    }

    listStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '90%',
        margin: '0 auto',
        maxWidth: '100%'
    };

}
