import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log("render posts", this.props.posts)
    return this.props.posts.map(post => {
      return (
        <li key={post.id} className="list-group-item">
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/post/new_post" style={{"margin-top": "10px"}} className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
//
// export default connect(null,mapDispatchToProps)(PostsIndex);
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
