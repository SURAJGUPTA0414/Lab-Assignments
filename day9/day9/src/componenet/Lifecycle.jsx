import React, { Component } from 'react'
//rcc
export default class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      console.log("constructor")
      this.state = {
         count:0,
         name:localStorage.getItem('name')
      }
    }
    show=()=>{
        this.setState({count: this.state.count + 1});
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps and Current Count=",state.count);
        return null;
    }
    componentDidMount(prevProps, prevState) {
        console.log("component is Mounted ")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated and Previous Count=",prevState.count);
    }
    componentWillUnmount() {
        console.log("component is Unmounted")
    }
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate")
        return false;
    }
  render() {
    console.log("render")
    return (
      <div>
        <div>{this.state.count}</div>
        <p>{this.state.name}</p>
        <p>{localStorage.getItem('age')}</p>
        <button onClick={this.show}>Click</button>
      </div>
    )
  }
}



// import React, { Component } from 'react';

// export default class Lifecycle extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//     this.state = {
//       count: 0,
//       name: localStorage.getItem('name')
//     };
//   }

//   show = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps and Current Count=', state.count);
//     return null;
//   }

//   componentDidMount() {
//     console.log('component is Mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated and Previous Count=', prevState.count);
//   }

//   componentWillUnmount() {
//     console.log('component is Unmounted');
//   }

//   shouldComponentUpdate() {
//     console.log('shouldComponentUpdate');
//     return true; // Changing it to true to allow updates
//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <div>{this.state.count}</div>
//         <p>{this.state.name}</p>
//         <p>{localStorage.getItem('age')}</p>
//         <button onClick={this.show}>Click</button>
//       </div>
//     );
//   }
// }
