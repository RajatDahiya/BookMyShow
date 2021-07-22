import React from 'react';
import Navbar from '../components/navbar/Navbar.Component';

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            
        </>
    );
};

export default DefaultLayout;

