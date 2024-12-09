// CustomSkeleton.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CustomSkeleton = ({ width = '100%', height = 'auto', ...props }) => {
    console.log("CustomSkeleton", width, height);

    return (
        <Skeleton 
            width={width} 
            height={height} 
            {...props}
        />
    );
};

export default CustomSkeleton;
