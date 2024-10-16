
import './App.css';
import ClassComponent from './Component/classComponent';
import Product from './Component/Product';
import ProductCard from './Component/ProductCard';

function App() {
  // const productArray = [
  //   { id: 1, name: "apple" },
  //   { id: 2, name: "samsung" },
  //   { id: 3, name: "redmi" },
  //   { id: 4, name: "realme" },
  // ];

//   const products = [
//     {id: 1, name: 'laptop', price: 50000},
//     {id: 2, name: 'mobile', price: 15000},
//     {id: 3, name: 'watch', price: 5000},
//     {id: 4, name: 'shoes', price: 2000},
//     {id: 5, name: 'headset', price: 1000}
// ];

const productCardDetails = [
  {id: 1, name: 'laptop', price: 50000,image : 'https://th.bing.com/th/id/R.dbb064ec0ec7fca7d6adbac3e9303615?rik=teSOJRC9v8B1pQ&riu=http%3a%2f%2fimages.techhive.com%2fimages%2farticle%2f2015%2f04%2fmacbook-no-glow-2-100578153-orig.jpg&ehk=HiKxqn6IA4%2bGUvMoAilFjwS6Y5uaEQIG5loNeuA15%2bc%3d&risl=&pid=ImgRaw&r=0'},
  {id: 2, name: 'mobile', price: 15000, image: 'https://th.bing.com/th/id/R.ea2348a5afbcfe512947bd255dccf490?rik=jHFZNWtepWOPZw&riu=http%3a%2f%2fwww.webanywhere.co.uk%2fblog%2fwp-content%2fuploads%2f2011%2f11%2fSmartphone.jpg&ehk=frBrby72btczk%2b9OjsMP9j3WTRhyY2LelXK83FJ6Nps%3d&risl=&pid=ImgRaw&r=0'},
  {id: 3, name: 'watch', price: 5000 , image : 'https://th.bing.com/th/id/R.faa4236f01c9458c27af1fef1214199f?rik=4JuGpABWsGdAFQ&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2014%2fBrands____Beautiful_watches_065807_.jpg&ehk=akqyWvVViw5kVAohEcgshnRrzrNO5bufH6aFjEy6m1Y%3d&risl=&pid=ImgRaw&r=0'},
  {id: 4, name: 'shoes', price: 2000, image : 'https://th.bing.com/th/id/OIP.7SeMY3g9G_4NuDeEHBz8DgAAAA?rs=1&pid=ImgDetMain'},
  {id: 5, name: 'earphone', price: 1000, image : 'https://i5.walmartimages.com/asr/01f45e55-1e7d-4b2c-9983-abd6499b8e68_1.42b65de79c231959bc7711ac356b69fb.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'}
];

  return (
    <div className="App">
     
      {/* <ClassComponent /> */}
      {/* <Product productArray={products}  /> */}
      <ProductCard productCardDetails={productCardDetails} />
      {/* <button className='btn btn-primary'>suraj</button> */}
    </div>
  );
}

export default App;

