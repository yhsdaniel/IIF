import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '/iif-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { getDetailProduct } from '../services/api';
import ModalCart from '../pages/Modal-Cart/ModalCart';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleModalCart = () => {
        setIsOpen(true)
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
            <div className='cart-container' onClick={handleModalCart}>
                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
                {!getTotalQuantity() ?
                    <div></div>
                    :
                    <div className="notification-badge">
                        <span className="quantity-text">{getTotalQuantity()}</span>
                    </div>
                }
            </div>
            <div className='username-container'>
                <span className='username'>Daniel</span>
                <span className='title-username'>GA officer</span>
            </div>

            {isOpen ? (
                <ModalCart />
            ) : (
                <div></div>
            )}
        </nav>
    )
}

export default Header