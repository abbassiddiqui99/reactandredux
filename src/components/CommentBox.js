import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  handleSumbit = (e) => {
    e.preventDefault();
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
