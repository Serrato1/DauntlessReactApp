import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/granular.css';


class Comments extends Component {
  state ={
    comments  :    []
  }
  componentWillMount(){
    let postId = this.props.postId;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then((json) =>{
        let comments = json;
        comments = comments.map((comment, id) =>{
                  return(
                    <div className="comment">
                      <div className="user">
                        {comment.email}
                      </div>
                      <div className="content">
                        {comment.body}
                      </div>
                    </div>
                  )
        })              
        this.setState({
           comments  : comments
        })                                                                                      
        console.log(comments);
    })
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.newComments);
    let comments = nextProps.newComments;
    comments = comments.map((comment, id) =>{
      return(
        <div className="comment">
          <div className="user">
            {comment.email}
          </div>
          <div className="content">
            {comment.body}
          </div>
        </div>
      )
}) 
    comments  = [ ...comments, ...this.state.comments];
    console.log("Comments " , comments );
    this.setState({
      comments
    })
  }
  render() {
    return (
      <div className="comments-container">
        <div className="title"> Comments </div>
          {this.state.comments}
      </div>
    );
  }
}

export default Comments;



