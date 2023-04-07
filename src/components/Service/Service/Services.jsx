import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Services.css'

const Services = () => {
    const tShirtsData=useLoaderData();
    console.log(tShirtsData);
    return (
        <div className='tshirt-container p-10'>
        <div className='tshirtCard-container'>
        {
            tShirtsData.map(tShirt=><TShirt key={tShirt._id} tshirt={tShirt}></TShirt>)
        }
        </div>
        <div className='order  bg-error'>
<h2>Order</h2>
        </div>
        </div>
    );
};

export default Services;