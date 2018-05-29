import React, { Component } from 'react';
import '../styles/App.css'; 
import Post from  './Post' ;

class PostList extends Component {
    state = {
            postList  : []
    }
    postClicked = (post)=>{
        // alert("post clicked");
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) =>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) =>{
                let authors = data;
                let posts = json;
                console.log("authors  " , authors);
                let postList = posts.map((post,id)=>{
                        let authorObj  =  authors[post.userId] !== undefined ? authors[post.userId] : {}   ;  
                        console.log(authorObj); 
                        post.authorObj = authorObj ;                   
                   return <Post key={id} post={post} postClicked={this.postClicked}/>
                })
                this.setState({postList})
                console.log(posts);
            })

        })
    }
    render() {
        let postList = this.state.postList;
        return (
            <div className="post-list">
                {postList}
            </div>
        );
    }
}

export default PostList;
