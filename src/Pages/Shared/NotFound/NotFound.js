import React from 'react';
import photo from '../../../images/photo-1479134262046-a470bfaf7a66.avif'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={photo} alt="" />
        </div>
    );
};

export default NotFound;