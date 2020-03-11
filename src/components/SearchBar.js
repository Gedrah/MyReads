import React from 'react';
import {withRouter} from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToBooksPage() {
        this.props.history.push('/books');
    }

    render() {
        return (
            <div>
                <span style={this.booksStyle} onClick={() => this.goToBooksPage() }>Books</span>
                Search
                <input onChange={this.props.searchBooks}/>
            </div>
        );
    }

    booksStyle = {
        marginRight: '10px'
    };
}



export default withRouter(SearchBar)
