// import React, { useState } from "react";
// // import ParentDiv from "./component/ParentDiv";
// import { createContext } from "react";
// import MyProvider from "./component/MyProvider/MyProvider";
// import ConsumerChild from "./component/ConsumerChild";
// // import OtherChild from "./component/OtherChild";
// // import GrandChild from "./component/GrandChild";
// // import Child from "./component/child";


// // export const GlobalInfo = createContext();

// const App = () => {

//   // const [color,setColor] = useState('green');


//   // const [selectedColor, setSelectedColor] = useState("");
//   // const [parentColor, setParentColor] = useState("");
//   // const [childColor, setChildColor] = useState("");

//   // const handleColorChange = (e) => {
//   //   setSelectedColor(e.target.value);
//   // };

//   // const applyParentColor = () => {
//   //   setParentColor(selectedColor);
//   // };

//   // const applyChildColor = () => {
//   //   setChildColor(selectedColor);
//   // };

//   return (
//     <div>

//       {/* <GlobalInfo.Provider value={{appcolor: color}}>
//         <div>
//           <h1>App component</h1>


         
//           <Child />
        
//            <GrandChild />

//         </div>
//       </GlobalInfo.Provider> */}
      

//       {/* <ParentDiv parentColor={parentColor} childColor={childColor} />

//       <h2>Select a color:</h2>
//       <select onChange={handleColorChange} value={selectedColor}>
//         <option value="">Choose a color</option>
//         <option value="red">Red</option>
//         <option value="blue">Blue</option>
//         <option value="green">Green</option>
//         <option value="yellow">Yellow</option>
//       </select>

//       <button onClick={applyChildColor} style={{ marginTop: "20px" }}>
//         Apply to child div color button
//       </button>
//       <br />
//       <button onClick={applyParentColor} style={{ marginTop: "10px" }}>
//         Apply to parent div color button
//       </button> */}

//       <MyProvider>
//         <div>
//           <h1>App component</h1>
//           <ConsumerChild />
//         </div>
//       </MyProvider>
//     </div>
//   );
// };

// export default App;













import React from 'react';
import MyProvider2 from './MyProvider/MyProvider2'; 
import DisplayData from './component/DisplayData'; 
import UpdateData from './component/UpdateData'; 
import ToggleButton from './component/ToggleButton'; 
import Home from './component/Home'; 
import About from './component/About'; 


const App = () => {
  return (
    <MyProvider2>
     
      <div>
        <h1>App Component</h1> 
        
        <ToggleButton /> 
       
        <DisplayData /> 
        
        <UpdateData /> 
        
        <Home /> 
        
        <About /> 
        
      </div>
    </MyProvider2>
  );
};

export default App; 




