import React, { Component } from 'react';
import './styles/App.css';
import './styles/granular.css';

import PostList from './components/PostList'
import PostPreview from './components/PostPreview'
import AddPost from './components/AddPost'

import Author from './components/Author'

import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router className=" color-black">
        <div className="container">
          {/* Navigation Bar */}
          <div className="left-nav">
            <div className="">Noel</div>
            <Link to="/" style={{ marginLeft : '10px',textDecoration: 'none' , 'color' : 'white' , fontSize : '25px' , textAlign : 'center'}} className="">Posts</Link>
          </div>

          {/* Content Area (posts, post view , author pages) */}
          <div className="content-container ">

            <Route exact path="/" component={PostList}/>

            <Route exact path="/post/add" component={AddPost}/>

            <Route exact path="/posts" component={PostList}/>

            <Route exact path="/posts/:id" component={PostPreview}/>

            <Route  path="/author/:email" component={Author}/>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
