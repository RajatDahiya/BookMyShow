import React from 'react';

//Components
import Navbar from '../components/navbar/Navbar.Component';

const MovieLayout = (props) => {
    return (
        <>
         <Navbar />
         {props.children}   
        </>
    );
};

export default MovieLayout ;
