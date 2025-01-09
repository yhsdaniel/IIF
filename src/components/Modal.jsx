import React from 'react'

export default function Modal({ children }) {
    return (
        <div className='modal-dialog'>
            <div className='modal'>
                <div className='modal-container'>
                    {children}
                </div>
            </div>
        </div>
    )
}
