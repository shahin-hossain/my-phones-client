import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Phone.css'
const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div className='phone'>
            <div>
                <h2>This is Phone Pages</h2>
                <img src={phone.image} alt="" />
                <h2>{phone.name}</h2>
                <p>{phone.description}</p>
                <h2>Price: ${phone.price}</h2>
            </div>
        </div>
    );
};

export default Phone;