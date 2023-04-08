import React from 'react';

const Cart = ({cart, handleRemoveButton}) => {
    let message;
    if(cart.length===0){
         message=<h1 className='bg-base-100 p-2 text-center font-bold'>Pls buy something</h1>
    }
    return (
        <div className='p-8'>
            {/* <h3>{cart.length}</h3> */}
            {message}
            {
                cart.map(tshirt=>
                    <p className='bg-accent mb-2'>{tshirt.name} <button className='bg-primary p-2 px-2' onClick={()=>handleRemoveButton(tshirt._id)}>X</button></p> )
            }
            {
                cart.length===2 && <p className='bg-base-100 p-2 text-center font-bold'>wow! Double</p>
            }
        </div>
    );
};

export default Cart;