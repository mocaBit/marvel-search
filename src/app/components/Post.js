import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        {this.props.children}
      </div>
    )
  }
}

export default Post;
