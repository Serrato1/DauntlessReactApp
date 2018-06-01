import React, { Component } from 'react';
import '../styles/App.css'; 
import Post from  './Post' ;

class PostList extends Component {
    state = {
            postList  : []
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
                console.log("posts from state ", this.state.postList )
                let postList = [...this.props.postList, ...posts];
                postList = postList.map((post,id)=>{
                    let authorObj  =  authors[post.userId] !== undefined ? authors[post.userId] : {}   ;  
                    console.log(authorObj); 
                    post.authorObj = authorObj ;
                    return <Post key={id} post={post}/> ; 
                })
                this.setState({postList})
                console.log("grabbing posts", postList);
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
