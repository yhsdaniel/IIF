import React from 'react';
import Cart from '../container/Cart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ListCart = () => {
    return (
        <div className='h-full'>
            <Header />
            <section className='mx-32 my-8 h-100-208'>
                <h1 className='text-2xl'>Cart</h1>
                <Cart />
            </section>
            <Footer />
        </div>
    )
}

export default ListCart