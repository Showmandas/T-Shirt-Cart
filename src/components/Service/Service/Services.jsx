import React, { useState } from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Services.css'
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../Loading/LoadingSpinner';



const Services = () => {
    const[cart,setCart]=useState([]);
    const tShirtsData=useLoaderData();
    // console.log(tShirtsData);
  // load spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner/>;
  }
    // handle buy now button 
    const handleCart=tshirt=>{
        // console.log(tshirt);
        // avoid duplicates
        const duplicate=cart.find(ts=>ts._id===tshirt._id);
        if(duplicate){
            toast("You have already added this product!")
        }else{

            const newCart=[...cart,tshirt];
            setCart(newCart)
        }
    }

    // handle remove button 
    const handleRemoveButton=ids=>{
        // console.log(ids);
        const removeItem=cart.filter(ts=>ts._id!==ids);
        setCart(removeItem);
    }

    return (
        <div className='tshirt-container p-10'>
        <div className='tshirtCard-container'>
        {
            tShirtsData.map(tShirt=><TShirt key={tShirt._id} tshirt={tShirt} handleCart={handleCart}></TShirt>)
        }
        </div>
        <div className='order  bg-error p-4 text-center'>
<h2 className='bg-base-100 p-2'>Order Summary</h2>
<Cart cart={cart}  handleRemoveButton={handleRemoveButton}/>
        </div>
        </div>
    );
};

export default Services;