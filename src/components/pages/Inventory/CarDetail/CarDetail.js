import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const { carId } = useParams();

    return (
        <div>
            <h2>Welcome to {carId}</h2>
        </div>
    );
};

export default CarDetail;