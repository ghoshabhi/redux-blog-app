import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/app';
import PostNew from './components/post_new';
import PostsIndex from './components/posts_index';
import SinglePost from './components/single_post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="post/new_post" component={PostNew} />
    <Route path="post/:id" component={SinglePost} />
  </Route>
);
