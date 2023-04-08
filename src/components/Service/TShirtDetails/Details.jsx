import React from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../Loading/LoadingSpinner';

const Details = () => {
     // load spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner/>;
  }
    const datas=useLoaderData();
    console.log(datas);
    const{picture,name,gender}=datas;
    return (
        <div>
            <h2>Details page:{datas.length}</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default Details;