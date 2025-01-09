import React, { useState } from 'react';
import './css/style.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../services/redux';
import Modal from '../../components/Modal';

export default function ModalCart({ title, onNext, onClose }) {
    const quantityPriceProduct = []
    const productToRemove = []
    const [checkedItems, setCheckedItems] = useState([]);
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let result = 0
        quantityPriceProduct.forEach(item => {
            result += Number(item)
        })
        return result.toFixed(2)
    }

    const handleCheckbox = (id) => {
        setCheckedItems((prevChecked) => {
            if (prevChecked.includes(id)) {
                // If already checked, uncheck it
                return prevChecked.filter((item) => item !== id);
            } else {
                // If unchecked, check it
                return [...prevChecked, id];
            }
        });
    };
    checkedItems.forEach((id) => {
        const item = cart.find((d) => d.product.id === id);
        if (item) {
            productToRemove.push(item);
        }
    });

    const handleRemoveItem = () => {
        dispatch(removeItem(productToRemove.map(val => val.product.id)))
    }
    console.log('remove', productToRemove.map(val => val.product.id))

    return (
        <Modal>
            <div className='modal-header'>
                <span onClick={onClose}>X</span>
                <h2>{title}</h2>
            </div>
            <div className="modal-body">
                <div className="header-content">
                    <div className='checkbox-container'>
                        <input type="checkbox" name="" />
                    </div>
                    <div className="left-section">
                        <h2>Select All</h2>
                    </div>
                    <div className="right-section">
                        <div className='trash-container' onClick={handleRemoveItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="trash-icon" onClick={handleRemoveItem}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="cart-list">
                {cart?.map((item) => (
                    <div key={item.product.id}>
                        <div className="cart-item">
                            <div className='checkbox-container'>
                                <input
                                    type="checkbox"
                                    checked={checkedItems.includes(item.product.id)}
                                    onChange={() => handleCheckbox(item.product.id)}
                                />
                            </div>
                            <div className="left-section">
                                <div className="image-section">
                                    <img src={item.product.image} alt="Image Cart" loading='lazy' />
                                </div>
                                <div className="title-section">
                                    <div className="details">
                                        <div className="title-container">
                                            <p className="title">{item.product.title}</p>
                                        </div>
                                    </div>
                                    <div className="details-vendor">
                                        <div className="vendor-container">
                                            <p className="vendor">Vendor Name</p>
                                        </div>
                                        <div className="company-container">
                                            <p className="company">PT. Intikom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="total-section">
                                    $ {(item.quantity * item.product.price).toFixed(2)} USD
                                </div>
                                <div className="quantity-section">
                                    <button onClick={() => dispatch(decrementQuantity(item.product.id))}>-</button>
                                    <label>{item.quantity}</label>
                                    <button onClick={() => dispatch(incrementQuantity(item.product.id))}>+</button>
                                </div>
                                {/* <div className="remove-section">
                                    <button onClick={() => dispatch(removeItem(item.product.id))}>Remove</button>
                                    </div> */}
                                <div className='hide'>{quantityPriceProduct.push((item.quantity * item.product.price).toFixed(2))}</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

            <div className="total-payment">
                <div className="payment-content">
                    <div className="total-label">Total $ {totalPrice()} USD</div>
                </div>
            </div>

            <div className='btn-container'>
                <button type="button" onClick={onNext}>Next</button>
            </div>
        </Modal>
    )
}
