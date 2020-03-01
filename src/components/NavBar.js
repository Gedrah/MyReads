import React from 'react';

export default class NavBar extends React.Component {
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
        height: '50px',
        fontSize: '35px',
        position: 'fixed',
        backgroundColor: 'aqua',
        width: '100%'
    };

}
