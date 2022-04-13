import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,price,description,img} = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
           <h2>{name}</h2>
           <h4>{price}</h4>
           <p><small>{description}</small></p>
           <button>Book:{name}</button>
        </div>
    );
};

export default Service;