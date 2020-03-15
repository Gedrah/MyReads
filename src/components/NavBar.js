import React from 'react';
import {withRouter} from "react-router-dom";
import "../css/NavBar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToSearch() {
        this.props.history.push('/search');
    }

    goToHome() {
        this.props.history.push('/');
    }

    render() {
        return (
          <div className="list-books-title">
              <h1 onClick={() => this.goToHome() }>My Reads</h1>
              <button className="open-search" onClick={() => this.goToSearch() }>Search</button>
          </div>
        );
    }
}

export default withRouter(NavBar);
