import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const tShirtsData=useLoaderData();
    return (
        <div>
        <h2>Services page</h2>
        </div>
    );
};

export default Services;