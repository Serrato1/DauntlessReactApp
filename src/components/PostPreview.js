import React, { Component } from 'react';
import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom';

import Comments from './Comments';
import '../styles/App.css';
import '../styles/granular.css';
import PostImg from '../post.png'



class PostPreview extends Component {
  state = {
    comment : '',
    comments : []
  }
  onCommentAdd = (e)=>{
    e.preventDefault();
    let {post} = this.props.location.state;
    let postId = post.id;
    let comment = {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Shanna@melissa.tv",
      "body": `${this.state.comment}`
      } ; 
    let comments = [...this.state.comments , comment];
    console.log("adding" , comment);

    this.setState({comments});
    // this.props.addComment(this.state.comment , postId)
  }
  onChange = (e)=>{
    let input = e.target.value;
    console.log(input);
    this.setState({comment: input});
  }
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
        <div className='add-comment'>
          <div className="color-white text-center">Leave A Comment</div>
          <form className="form margin-left-strong" onSubmit = {(e)=>{this.onCommentAdd(e)}}>
                <input type="text" placeholder="Enter Comment" onChange={(e)=>{this.onChange(e)}}></input>
                <input type="submit" placeholder="Enter Comment"></input>
          </form>
        </div>

        <Comments postId = {post.id} newComments={this.state.comments}/>
      </div>
    );
  }
}

export default PostPreview;
