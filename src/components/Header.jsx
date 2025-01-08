import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '/iif-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { getDetailProduct, getNameUser } from '../services/api';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getNameUser())
    }, [])

    //get cart quantity
    const cart = useSelector((state) => state.cart.cart)
    const getTotalQuantity = () => {
        let total = 0
        total += cart.length
        return total
    }

    const linkToHome = () => {
        getDetailProduct(null)
        navigate('/')
    }

    return (
        <nav>
            <div className="logo" onClick={linkToHome}>
                <img src={logo} alt="Sample Logo" />
            </div>
            <div className="flex-1"></div>
            <div className="back-to-homepage">
               <span>Back to homepage</span>
            </div>
            <div className='cart-container' onClick={() => navigate('/Cart')}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {!getTotalQuantity() ?
                    <div></div>
                    :
                    <div className='circle-cart'>
                        <span className='number-of-cart'>{getTotalQuantity()}</span>
                    </div>
                }
            </div>
            <div className='username-container'>
                <span className='username'>Daniel</span>
                <span className='title-username'>GA officer</span>
            </div>
        </nav>
    )
}

export default Header