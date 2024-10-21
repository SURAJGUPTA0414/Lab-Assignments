// import React, { useState } from 'react';
// import Child1 from './componenet/child1';
// import Child2 from './componenet/child2';
// import Child3 from './componenet/child3';
// // import Child1 from './components/Child1';
// // import Child2 from './components/Child2';
// // import Child3 from './components/Child3';

// function App() {
//   const [count, setCount] = useState(0);

//   function handleCount(newCount) {
//     console.log(newCount);
//     setCount(newCount); // Update parent state with child's count
//   }

//   return (
//     <div style={{ backgroundColor: 'cyan' }}>
//       <h1>Total clicks: {count}</h1>
//       {/* <Child1 handleCount={handleCount} />
//       <Child2 handleCount={handleCount} />
//       <Child3 handleCount={handleCount} /> */}
//       <Child1 handleCount={handleCount}/>
//       <Child2 handleCount={handleCount}/>
//       <Child3 handleCount={handleCount}/>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Child1 from './componenet/child1';
// import Child2 from './componenet/child2';
// import Child3 from './componenet/child3';

// function App() {
//   const [count, setCount] = useState(0);

//   function handleCount(increment) {
//     setCount(prevCount => prevCount + increment); // Add the increment to the current count
//   }

//   return (
//     <div style={{ backgroundColor: 'cyan' }}>
//       <h1>Total clicks: {count}</h1>
//       <Child1 handleCount={handleCount} />
//       <Child2 handleCount={handleCount} />
//       <Child3 handleCount={handleCount} />
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react'
// import Child2 from './Child2'

// export default function Parent() {
//   const [message, setMessage] = useState("")

//   function handleMessage(msg) {
//     console.log(msg)
//     setMessage(msg)
//   }

//   return (
//     <div style={{backgroundColor: 'cyan'}}>
//       {message}
//       <Child2 sendMessage={handleMessage} />
//     </div>
//   )
// }

// import React, { Component } from 'react'
// import Lifecycle from './componenet/Lifecycle'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//  {/* <Lifecycle /> */}
// <h3>Login Form</h3>

    
//     <form action="/submit-form" method="POST">
//         <div>
//             <label for="username">Username:</label>
//             <input type="text" id="username" name="username" required />
//         </div>
        
//         <div>
//             <label for="password">Password:</label>
//             <input type="password" id="password" name="password" required />
//         </div>
        
//         <div>
//             <button type="submit">Submit</button>
//         </div>
//     </form>
  

        
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       isButtonEnabled: false
//     };
//   }

//   // Handle input changes for username and password
//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value }, this.checkCredentials);
//   };

//   // Check if credentials match the ones stored in localStorage
//   checkCredentials = () => {
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');
//     const { username, password } = this.state;

//     if (username === storedUsername && password === storedPassword) {
//       this.setState({ isButtonEnabled: true });
//       alert('password matched submit button enabled')
//     } else {
//       this.setState({ isButtonEnabled: false });
//       alert('enter correct username and password')
//     }
//   };

//   render() {
//     const { isButtonEnabled } = this.state;

//     return (
//       <div>
//         <h3>Login Form</h3>
//         <form>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               onChange={this.handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             {/* Submit button is enabled only when credentials match */}
//             <button type="submit" disabled={!isButtonEnabled}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import AssignmentChild from './componenet/AssignmentChild';

export default function App() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleInputChange = (e) => {
    console.log(e);
    
    const { name, value } = e.target;
    
    console.log(value);
    
    

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  
  const checkCredentials = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    
    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true); 
      alert ('username and password  matched');
    } else {
      setIsLoggedIn(false); 
      alert ('username and password no matched');
    }
  };

  
  const handleSubmit = (e) => {
    console.log(e);
    
    e.preventDefault();
    checkCredentials(); 
  };

  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      
      {isLoggedIn && <AssignmentChild />}
    </div>
  );
}



