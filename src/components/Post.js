import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/granular.css';
import PostImg from '../post.png'
import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

class Post extends Component {
  render() {
    let {userId , id , title , body , authorObj} = this.props.post;
    title = title.substr(0,15);
    body = body.substr(0, 30);

    return (
      <div  className="post"  >
          <img src={PostImg}/>

          <Link style={{textAlign:'center' , textDecoration: 'none' , 'color' : 'white' , fontSize : '15px' }} to={{
            pathname : `/posts/${id}`,
            state : {
              post : this.props.post
            }
          }}
          className = "title">
            {title}
          </Link>

          <div className = "content">
           {body} ....
          </div>
          <div className = "author">
            {authorObj.email}
          </div>
      </div>
    );
  }
}

export default Post;
