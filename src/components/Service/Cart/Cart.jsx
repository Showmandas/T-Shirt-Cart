import React from 'react';

const Cart = ({cart, handleRemoveButton}) => {
    return (
        <div>
            <h3>{cart.length}</h3>
            {
                cart.map(tshirt=>
                    <p className='bg-accent mb-2'>{tshirt.name} <button className='bg-primary p-2 px-2' onClick={()=>handleRemoveButton(tshirt._id)}>X</button></p> )
            }
        </div>
    );
};

export default Cart;