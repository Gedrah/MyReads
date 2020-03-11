import React from 'react';
import NavBar from "../components/NavBar";
import BookShelf from "../components/BookShelf";

export default class BooksPage extends React.Component {
    shelfs = ['Currently Reading','Want to Read', 'Read'];

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar/>
                {
                    this.shelfs.map((shelf, index) => {
                        return <BookShelf key={index} currentShelf={shelf} />
                    })
                }
            </div>
        );
    }
}
