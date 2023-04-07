import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Services.css'
import Cart from '../Cart/Cart';

const Services = () => {
    const[cart,setCart]=useState([]);
    const tShirtsData=useLoaderData();
    // console.log(tShirtsData);

    // handle buy now button 
    const handleCart=tshirt=>{
        // console.log(tshirt);
        const newCart=[...cart,tshirt];
        setCart(newCart)
    }

    // handle remove button 
    const handleRemoveButton=ids=>{
        
    }

    return (
        <div className='tshirt-container p-10'>
        <div className='tshirtCard-container'>
        {
            tShirtsData.map(tShirt=><TShirt key={tShirt._id} tshirt={tShirt} handleCart={handleCart}></TShirt>)
        }
        </div>
        <div className='order  bg-error'>
<h2>Order</h2>
<Cart cart={cart}/>
        </div>
        </div>
    );
};

export default Services;