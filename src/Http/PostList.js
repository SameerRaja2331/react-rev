import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: error.message });
      });
  }

  render() {
    //destructing state/props
    const { posts, errMsg } = this.state;
    return (
      <div>
        PostList
        {/* conditional rendering */}
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title} </div>)
          : null}
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
