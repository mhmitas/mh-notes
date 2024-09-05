import Navbar from '@/components/my-ui/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow'>{children}</div>
        </div>
    );
};

export default layout;