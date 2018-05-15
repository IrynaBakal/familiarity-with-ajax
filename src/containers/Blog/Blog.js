import React, { Component } from 'react';
import Posts from './Posts/Posts';
import './Blog.css';
import { Route } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/new-post'>New Post</a></li>
            </ul>
          </nav>
        </header>
        {/* if path match, route will be replace itself with content you define in render */}
        <Route path='/' exact render={ () => <h1>home</h1> } />
        {/* second route will be rendered always */}
        <Route path='/' render={ () => <h1>home 2</h1> } />
      </div>
    );
  }
}

export default Blog;
