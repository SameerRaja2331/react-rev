import React, { Component } from "react";

export class Increment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.countIncrement()}>Increment</button>
      </>
    );
  }
}

export default Increment;
