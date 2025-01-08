import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div className='home-container'>
            <Header />
            <Navigation />
            {children}
        </div>
    )
}

export default Layout