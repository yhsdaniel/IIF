import React from 'react';

const Banner = () => {
    return (
        <>
            <section className='section-banner-text'>
                <span>E-Catalogue</span>
                <span>select what you need here</span>
                <span className='secondary'>Select your needs based on the categories below</span>
            </section>
            <section className='section-grid'>
                <div className='grid'>
                    <div className='title-grid'>
                        <span>IT Periperal</span>
                    </div>
                    <div className='icon'>
                    </div>
                </div>
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
        </>
    )
}

export default Banner