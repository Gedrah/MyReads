import React from 'react';
import './App.css';
import BooksPage from "./pages/BooksPage";
import SearchPage from "./pages/SearchPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/books">
                    <BooksPage/>
                </Route>
                <Route path="/search">
                    <SearchPage/>
                </Route>
                <Route path="/">
                    <BooksPage/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
