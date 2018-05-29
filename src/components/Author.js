import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/granular.css';

import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

class Author extends Component {
  render() {
    return (
      <div  className="author"  >
       I am an author
      </div>
    );
  }
}

export default Author;
