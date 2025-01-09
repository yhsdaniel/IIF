import React from 'react'

export default function Modal({ children }) {
    return (
        <div className='modal-dialog'>
            <div className='modal'>
                {children}
            </div>
        </div>
    )
}
