import React, { Component } from 'react';

import Comments from './Comments';
import '../styles/App.css';
import '../styles/granular.css';


class PostPreview extends Component {
  render() {
    let { post } = this.props.location.state;

    console.log(post);
    post.title = post.title.substr(0,50);
    post.body = post.body.substr(0, 500);
    return (
      <div>

        <div className="post preview">

            <img src="http://placehold.it/150/771796" />

            <div className  =  "title">
                {post.title}
            </div>

            <div className = "content">
              {post.body}
            </div>

            <div className = "author">
              {post.authorObj.email}
            </div>


        </div>
        <Comments postId = {post.id}/>
      </div>
    );
  }
}

export default PostPreview;
