import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,name,price,description,img} = props.service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) =>{
        navigate(`service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
           <h2>{name}</h2>
           <h4>{price}</h4>
           <p><small>{description}</small></p>
           <button onClick={ () =>navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;