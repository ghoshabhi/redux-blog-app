import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

export const formFields = [
  'title',
  'categories',
  'content'
];

class PostNew extends Component {
  render() {
    const {
      fields: {title,categories,content},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="form-control-label">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>
          <label>Category</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="form-control-label">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="form-control-label">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const error = {};

  if(!values.title) {
    error.title = 'Enter a Title';
  }

  if(!values.categories) {
    error.categories = 'Enter a Category'
  }

  if(!values.content) {
    error.content = 'Enter some Content'
  }

  return error;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'NewPost',
  fields: formFields,
  validate
}, null, { createPost })(PostNew);
