import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <section className='section-nav'>
            <Link to={'/'}>Home</Link>
            <Link to={'/request'}>My Request</Link>
            <Link to={'/invoice'}>Invoice</Link>
        </section>
    )
}
