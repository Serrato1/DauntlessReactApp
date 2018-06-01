import React, { Component } from 'react';
import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

import '../styles/App.css';
import '../styles/granular.css';


class AddPost extends Component {
  state = {
    title : '',
    content : ''
  }
  handleInput = (event)=>{
    let input = event.target.value;
    let oldState = this.state;
    oldState[event.target.name] = input;
    console.log(input);
    this.setState(oldState) ;
  }
  handlePost = (event)=>{
    event.preventDefault();
    let post = {
      "userId": 1,
      "id": 1,
      "title": `${this.state.title}`,
      "body": `${this.state.content}`
      } ;
    this.props.addPost(post);
  }
  render() {
    return (
      <div>
        <form className="form-container" onSubmit={(e)=>{this.handlePost(e)}}>
          <input name="title" type="text" placeholder="Title" onChange={(event)=>{this.handleInput(event)}}></input>
          <textarea name="content"   placeholder="Content" onChange={(event)=>{this.handleInput(event)}} > </textarea>
          <input type="submit" placeholder="Submit" value="Add Post"></input>
        </form>
      </div>
    );
  }
}

export default AddPost;
