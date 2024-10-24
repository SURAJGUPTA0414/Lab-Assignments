import React from 'react'
// import { useParams } from 'react-router-dom';

// export default function HoverComponent() {
//   return (
//     const { colorname } = useParams();
//     <div>

//         <h1 style={{backgroundColor:colorname}}>Suraj</h1>
      
//     </div>
//   )
// }


import { useParams } from 'react-router-dom';

const HoverComponent = () => {
    const { colorname } = useParams();  

    return (
        <div>
            <h1 style={{ backgroundColor: colorname }}>Suraj</h1>  
        </div>
    );
}

export default HoverComponent;
