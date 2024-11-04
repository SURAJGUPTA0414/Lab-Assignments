// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>hi</h1>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// // import UseMemodemo from './Assignment/UseMemodemo'
// // import React, { useMemo, useState } from 'react'
// import {useMemo, useState} from 'react';
// import MyChild from './components/MyChild';

// function App() {
//   const [x,setX] = useState(0);
//     const[y,setY] = useState(100);

//     const multiplication = useMemo(
//         function multiply(){
//             console.log('inside memo');
//             return(x*20);

//         }
//     );
// ;  return (
//     <div>
//         <h1>use memeo</h1>

//         <h1>value of x is :{x}</h1>
//         <h1>multiply value is : {multiplication}</h1>
//         <button onClick={() => setX(x+1)}> Add</button>

//         <h1>Vaue of y is :{y}</h1>
//         <button onClick={() => setY(y-1)}>Subtract</button>
//         <MyChild y={y} />

//     </div>
//   )
// }

// export default App


// import { useState, Suspense, lazy } from 'react';
// import Loading from './Assignment/Loading';

// const MarkdownPreview = lazy(() => delayForDemo(import('./Com')));

// export default function MarkdownEditor() {
//   const [showPreview, setShowPreview] = useState(false);
//   const [markdown, setMarkdown] = useState('Hello, **world**!');
//   return (
//     <>
//       <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
//       <label>
//         <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
//         Show preview
//       </label>
//       <hr />
//       {showPreview && (
//         <Suspense fallback={<Loading />}>
//           <h2>Preview</h2>
//           <MarkdownPreview markdown={markdown} />
//         </Suspense>
//       )}
//     </>
//   );
// }

// // Add a fixed delay so you can see the loading state
// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }


//day17 higher order



import { useState } from "react";

function HOCRed(props) {
  return <div style={{ background: 'red' }}>
    <h1>This is red</h1>
    <props.cmp />
    <props.imp />

  </div>
}

function HOCGreen(props) {
  return <div style={{ background: 'green' }}>
    <h1>This is green</h1>
    <props.cmp />
    <props.imp />

  </div>
}

function HOCBlue(props) {
  return <div style={{ background: 'blue' }}>
    <h1>This is Blue</h1>
    <props.cmp />
    <props.imp />

  </div>
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

function ColorChange() {
  const [color, setColor] = useState('white');

  const darkLight = () => {
    setColor((prevColor) => (  prevColor === 'black' ? 'white' : 'black'  ));
  };


  return (
    <div>
      <h1 style={{ background: color, color: color === 'black' ? 'white' : 'black' , height:'150px' }}> !!!suraj!!!  </h1>
      <button onClick={darkLight}>Apply color: {color === 'white' ? 'Switch to dark' : 'Switch to light'} </button>

    </div>
  );
}

function App() {

  return (
    <div>

      <HOCRed cmp={Counter} imp={ColorChange} />
      <HOCGreen cmp={Counter} imp={ColorChange} />
      <HOCBlue cmp={Counter} imp={ColorChange} />

    </div>
  )
}

export default App

