import React from 'react';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        console.log(this.props.book);
    }

    render() {
        return (
            <div style={this.bookStyle}>
                <img style={this.bookImgStyle} src={this.props.book.imageLinks.thumbnail} alt={this.props.book.title}/>
            </div>
        );
    }

    bookStyle = {
        width: 'auto',
        textAlign: 'center',
        padding: '20px'
    };

    bookImgStyle = {
        height: '100%'
    };

}
