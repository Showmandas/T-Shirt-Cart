import React from 'react';
import './TShirt.css'
import { Link } from 'react-router-dom';

const TShirt = ({tshirt,handleCart}) => {
  console.log(tshirt);
  const{name,picture,_id,price}=tshirt;
    return (
      <div className="card card-compact  bg-primary shadow-xl">
  <figure><img src={picture} alt="Shoes" className='tshirtImg'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : {price}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleCart(tshirt)} className="btn btn-accent  w-full">Buy Now</button>
      <Link to={`../details/${tshirt._id}`}><button className="btn btn-secondary  w-full">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default TShirt;