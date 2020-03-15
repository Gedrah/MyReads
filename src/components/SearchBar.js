import React from 'react';
import {withRouter} from "react-router-dom";
import '../css/SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToBooksPage() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={() => this.goToBooksPage() }>Close</button>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.props.searchBooks}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default withRouter(SearchBar)
