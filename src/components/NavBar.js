import React from 'react';
import {withRouter} from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToSearch() {
        this.props.history.push('/search');
    }

    render() {
        return (
          <div style={this.navBarStyle}>
              <span style={this.titleStyle}>My Reads</span>
              <span style={this.searchStyle} onClick={() => this.goToSearch() }>Search</span>
          </div>
        );
    }


    navBarStyle = {
        height: '50px',
        fontSize: '33px',
        backgroundColor: 'aqua',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '-50px',
        position: 'fixed'
    };

    titleStyle = {
        marginLeft: '10px'
    };

    searchStyle = {
        marginRight: '10px'
    };

}

export default withRouter(NavBar);
