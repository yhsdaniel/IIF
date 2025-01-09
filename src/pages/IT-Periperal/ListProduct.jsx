import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../services/api';
import { addToCart } from '../../services/redux';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const imagePerRow = 10

const ListProduct = () => {
    const { data } = useSelector(state => state.product)
    const [next, setNext] = useState(imagePerRow)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const handleMoreImage = () => {
        setNext(next + imagePerRow)
    }

    return (
        <>
            <section className='section-banner-text'>
                <span>E-Catalogue</span>
                <span className='sub-title-banner'>IT - PERIPERAL</span>
            </section>
            <section className='section-list-product'>
                <div className='content-container'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columns={{ xs: 2, sm: 16, md: 20 }} className='grid-container'>
                            {data?.slice(0, next).map((val, index) => (
                                <Grid item key={index} size={{ xs: 2, sm: 4, md: 4 }} className="product-card">
                                    <div className="product-container">
                                        <div className="details">
                                            <div className="title-container">
                                                <p className="title">{val.title}</p>
                                            </div>
                                            <div className="price-container">
                                                <p className="price">${val.price} USD</p>
                                            </div>
                                        </div>
                                        <div className='cart-container'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cart" onClick={() => dispatch(addToCart({ product: val, quantity: 1 }))}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='details-image'>
                                        <img src={val.image} alt="Sample Image" className="image" />
                                    </div>
                                    <div className="details-vendor">
                                        <div className="vendor-container">
                                            <p className="vendor">Vendor Name</p>
                                        </div>
                                        <div className="company-container">
                                            <p className="company">PT. Intikom</p>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
                <button className='btn-loadmore' onClick={handleMoreImage}>
                    Load More. . .
                </button>
            </section>
        </>
    )
}

export default ListProduct