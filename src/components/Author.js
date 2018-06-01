import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/granular.css';

import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

class Author extends Component {
  render() {
    let {name , phone , username, website} = this.props.location.state;
    console.log(name);
    return (
      <div  className="author-view"  >
        <h2 className="" >
            Name : {name}
        </h2>
        <h3>
            Username : {username}
        </h3>
        <h3>
            Follow Me here : <a href={website}>{website}</a>
        </h3>
      </div>
    );
  }
}

export default Author;
