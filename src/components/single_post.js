import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class SinglePost extends Component {

  componentWillMount() {
    this.props.fetchSinglePost(this.props.params.id);
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
      .catch(err => {
        console.error("Error occured on delete");
      });
  }

  render() {
    const { post } = this.props;

    if(!post){
      return <div>Loading...!</div>
    }
    return (

      <div className="container">
        <Link to='/'>Home</Link>
        <button
          className="btn btn-danger pull-xs-right marginTop"
          onClick = {this.onDeletePost.bind(this)}
          >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
};

SinglePost.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSinglePost,
    deletePost
  }
  )(SinglePost);
