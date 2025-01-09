import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '/iif-logo.svg'
import { useNavigate } from 'react-router-dom';
import ModalCart from '../pages/Modal-Cart/ModalCart';
import FinancialFindims from '../pages/container/FinancialFindims/FinancialFindims';

const Header = () => {
    const [currentModal, setCurrentModal] = useState(0)
    const navigate = useNavigate()

    const handleNext = () => {
        setCurrentModal((prev) => prev + 1)
    }

    const handleClose = () => {
        setCurrentModal(null)
    }

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
        setCurrentModal(1)
    }

    return (
        <nav>
            <div className="logo" onClick={linkToHome}>
                <img src={logo} alt="Sample Logo" />
            </div>
            <div className="flex-1"></div>
            <div className="back-to-homepage" onClick={linkToHome}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="home-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Back to homepage</span>
            </div>
            <div className='cart-container' onClick={handleModalCart}>
                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
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

            {currentModal === 1 && (
                <ModalCart
                    title={'My Cart'} 
                    onNext={handleNext}
                    onClose={handleClose}
                />
            )}

            {currentModal === 2 && (
                <FinancialFindims 
                    title={'Financial Findims'}
                    onClose={handleClose}
                />
            )}
        </nav>
    )
}

export default Header