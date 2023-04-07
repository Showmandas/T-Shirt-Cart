import React from 'react';

const TShirt = ({tshirt}) => {
  console.log(tshirt);
  const{name,picture,_id,price}=tshirt;
    return (
        <div className="card w-80 bg-base-100 shadow-xl bg-primary">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : {price}</p>
  </div>
  <figure><img src={picture} alt="Shoes" /></figure>
</div>
    );
};

export default TShirt;