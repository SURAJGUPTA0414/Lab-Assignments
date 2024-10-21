import axios from 'axios'
import React, { useEffect } from 'react'

export default function AxiosDemo() {
    let url = "https://fakestoreapi.com/products";
    const [products, setProducts] = React.useState([]);
    async function  handleProduct() {
        const resp=  await  axios.get(url);
        console.log(resp)
        setProducts(resp.data);
      }
    useEffect(() => {
        handleProduct();
        }, [])
  return (
    <div>
        <ul>
            {
                products && products.map((p, index) => {
                    return <li key={index}>{p.title}---{p.category}--{p.image}</li>
            }
            )}
        </ul>
        
        
    </div>
  )
}
