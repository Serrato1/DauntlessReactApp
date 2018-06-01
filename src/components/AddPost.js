import React, { Component } from 'react';
import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

import '../styles/App.css';
import '../styles/granular.css';


class AddPost extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Title"></input>
            <textarea   placeholder="Content"> </textarea>
          <input type="submit" placeholder="Submit" value="Add Post"></input>
        </form>
      </div>
    );
  }
}

export default AddPost;
