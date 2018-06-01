import React, { Component } from 'react';
import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

import Comments from './Comments';
import '../styles/App.css';
import '../styles/granular.css';
import PostImg from '../post.png'



class PostPreview extends Component {
  render() {
    let { post } = this.props.location.state;

    console.log(post);
    post.title = post.title.substr(0,50);
    post.body = post.body.substr(0, 500);
    return (
      <div>

        <div className="post preview">
        
            <img src  =  {PostImg} />
            <div className  =  "title">
                {post.title}
            </div>

            <div className = "content">
              {post.body}
            </div>

            <div className = "author">
              <Link to={
                {
                  pathname : `/author/${post.authorObj.email}`,
                  state : post.authorObj
                }}  style={{color:'white'}}> {post.authorObj.email}</Link>
            </div>


        </div>
        <Comments postId = {post.id}/>
      </div>
    );
  }
}

export default PostPreview;
