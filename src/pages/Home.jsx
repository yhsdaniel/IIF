import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Layout>
            <section className='section-banner-text'>
                <span>E-Catalogue</span>
                <span>select what you need here</span>
                <span className='secondary'>Select your needs based on the categories below</span>
            </section>
            <section className='section-grid'>
                <Link to={'/it-periperal'}>
                    <div className='grid'>
                        <div className='title-grid'>
                            <span>IT Periperal</span>
                        </div>
                        <div className='icon'>
                        </div>
                    </div>
                </Link>
                <div className='grid'>
                    <div className='title-grid'>
                        <span>Printing</span>
                    </div>
                    <div className='icon'>
                    </div>
                </div>
                <div className='grid'>
                    <div className='title-grid'>
                        <span>Stationary & Pantry Supply</span>
                    </div>
                    <div className='icon'>
                    </div>
                </div>
                <div className='grid'>
                    <div className='title-grid'>
                        <span>Merchandise</span>
                    </div>
                    <div className='icon'>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
