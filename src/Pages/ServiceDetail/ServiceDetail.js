import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Welcome to my service center:{serviceId}</h2>

           <div className='text-center'>
           <Link to='/chakout'>
                <button className='btn btn-primary'> Proceed Chackout</button>
            </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;
