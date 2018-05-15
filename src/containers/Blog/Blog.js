import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route, Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/new-post'>New Post</Link></li>
            </ul>
          </nav>
        </header>
        {/*
          if path match, route will be replace itself with content you define in render
          <Route path='/' exact render={ () => <h1>home</h1> } />
          //second route will be rendered always
          <Route path='/' render={ () => <h1>home 2</h1> } />
        */}
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' component={NewPost} />
      </div>
    );
  }
}

export default Blog;
