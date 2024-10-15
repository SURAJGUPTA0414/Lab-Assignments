import React, { useState } from 'react';

function ColourSelector() {
   const [selectedColor, setSelectedColor] = useState('');

   const colors = [
     { value: '', label: 'Choose a color' },
     { value: 'red', label: 'Red' },
     { value: 'green', label: 'Green' },
     { value: 'blue', label: 'Blue' },
     { value: 'yellow', label: 'Yellow' },
     { value: 'orange', label: 'Orange' },
   ];

   const handleColorChange = (event) => {
     setSelectedColor(event.target.value);
     console.log(event);
     
   };

   return (
     <div>
       
       <label>Select a color: </label>
       <select onChange={handleColorChange} value={selectedColor}>
         {colors.map((color) => (
           <option key={color.value} value={color.value}>
             {color.label}
           </option>
         ))}
       </select>

       {/* Parent div */}
       <div
         style={{
           marginTop: '20px',
           width: '200px',
           height: '200px',
           border: '2px solid gray',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
         }}
       >
         {/* Colored div */}
         <div
           style={{
             width: '100px',
             height: '100px',
             backgroundColor: selectedColor || 'transparent',
             border: '1px solid black',
           }}
         >
           {selectedColor ? `Color: ${selectedColor}` : 'No color selected'}
         </div>
       </div>
     </div>
   );
}

export default ColourSelector;
