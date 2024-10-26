
import React, {  PureComponent } from 'react';

export default class Counter extends PureComponent {
  
  state = {
    count: 0
  };

  render() {
    console.log("render")
    return (
      <div>
        <p>Number: {this.state.count}</p>    
        <button onClick={() => {this.setState({count:this.state.count +1})}}>+</button>
        
        <button onClick={() => {this.setState({count:this.state.count -1})}}>-</button>
          

          <h1>below is pure component example</h1>
        <button onClick={() => {this.setState({count:10})}}>+</button>
        
        <button onClick={() => {this.setState({count:10})}}>-</button>
        
      </div>
    );
  }
}