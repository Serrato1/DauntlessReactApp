import React, { Component } from 'react';
import './styles/App.css';
import './styles/granular.css';

import PostList from './components/PostList'
import PostPreview from './components/PostPreview'
import Author from './components/Author'

import { BrowserRouter as Router, Route  , NavLink , Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router className="color-black">
        <div>
          {/* Navigation Bar */}
          <div className="nav-bar bg-white">
            <div className="item-center font-large margin-left-weak">NOEL</div>
            <Link to="/" className="item-center text-small">Posts</Link>
          </div>

          {/* Content Area (posts, post view , author pages) */}
          <div className="content-container bg-ghost">
            <Route exact path="/" component={PostList}/>
            <Route exact path="/posts" component={PostList}/>
            <Route  path="/posts/:id" component={PostPreview}/>
            <Route  path="/author/:id" component={Author}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
