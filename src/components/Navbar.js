import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div style={this.navBarStyle}>My Reads</div>
        );
    }


    navBarStyle = {
        height: '47px',
        fontSize: '35px'
    };

}
