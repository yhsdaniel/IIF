import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

export default function Home() {
    return (
        <Layout>
            <section className='section-banner-text'>
                <span>E-Catalogue</span>
                <span>select what you need here</span>
                <span className='secondary'>Select your needs based on the categories below</span>
            </section>

            <section className='section-grid'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 2, sm: 16, md: 20 }} className='grid-container'>
                        <Link to={'/it-periperal'}>
                            <Grid item size={{ xs: 2, sm: 4, md: 4 }} className='grid'>
                                <div className='title-grid'>
                                    <span>IT Periperal</span>
                                </div>
                                <div className='icon'></div>
                            </Grid>
                        </Link>
                        <Grid item size={{ xs: 2, sm: 4, md: 4 }} className='grid'>
                            <div className='title-grid'>
                                <span>Printing</span>
                            </div>
                            <div className='icon'>
                            </div>
                        </Grid>
                        <Grid item size={{ xs: 2, sm: 4, md: 4 }} className='grid'>
                            <div className='title-grid'>
                                <span>Stationary & Pantry Supply</span>
                            </div>
                            <div className='icon'>
                            </div>
                        </Grid>
                        <Grid item size={{ xs: 2, sm: 4, md: 4 }} className='grid'>
                            <div className='title-grid'>
                                <span>Merchandise</span>
                            </div>
                            <div className='icon'>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </Layout >
    )
}
