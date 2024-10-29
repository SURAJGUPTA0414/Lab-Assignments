
// import React from 'react';
// import './App.css';
// import BookContainer from './Components/BookContainer';
// import { Provider } from 'react-redux';
// import store from './Components/BookStore';
// import FruitContainer from './Assignment/FruitContainer';

// function App() {
//   return (
//     // <Provider store={store}>

//     //   <BookContainer />

//     // </Provider>

//     <Provider store={store}>
//       <FruitContainer />
//     </Provider>
//   );
// }

// export default App;


// // import React from 'react';
// // import './App.css';
// // import { Provider } from 'react-redux';
// // import store from './Assignment/FruitStore';
// // import FruitContainer from './Assignment/FruitContainer';

// // function App() {
// //   return (
// //     <Provider store={store}>
// //       <FruitContainer />
// //     </Provider>
// //   );
// // }

// // export default App;


// // import React from 'react';
// // import './App.css';
// // import { Provider } from 'react-redux';
// // import store from './Assignment/FruitStore';
// // import FruitContainer from './Assignment/FruitContainer';

// // function App() {
// //   return (
// //     <Provider store={store}>
// //       <FruitContainer />
// //     </Provider>
// //   );
// // }

// // export default App;



import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Assignment/FruitStore';
import FruitContainer from './Assignment/FruitContainer';

function App() {
  return (
    <Provider store={store}>
      <FruitContainer />
    </Provider>
  );
}

export default App;
