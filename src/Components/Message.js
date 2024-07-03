import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({ message: "Hi Sameer" });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click me</button>
      </>
    );
  }
}

export default Message;
