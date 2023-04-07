import React from 'react';

const Cart = ({cart, handleRemoveButton}) => {
    let message;
    if(cart.length===0){
         message=<h1>Pls buy something</h1>
    }
    return (
        <div>
            {/* <h3>{cart.length}</h3> */}
            {message}
            {
                cart.map(tshirt=>
                    <p className='bg-accent mb-2'>{tshirt.name} <button className='bg-primary p-2 px-2' onClick={()=>handleRemoveButton(tshirt._id)}>X</button></p> )
            }
            {
                cart.length===2 && <p>wow! Double</p>
            }
        </div>
    );
};

export default Cart;