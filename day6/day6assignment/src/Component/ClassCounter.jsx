import React, { Component } from 'react';

export default class ClassCounter extends Component {

  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <p>Number: {this.state.count}</p>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
        <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>-</button>

      </div>
    );
  }
}
