import React from 'react';
import DetailProduct from '../components/DetailProduct';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ListDetailProduct = () => {

    return (
        <div className='flex justify-start items-start flex-col h-screen'>
            <Header />
            <DetailProduct />
            <Footer />
        </div>
    )
}

export default ListDetailProduct