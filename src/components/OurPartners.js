import React from 'react'
import { Container } from 'react-bootstrap'
import './OurPartner.scss'

import imgMain from '../images/new.png'

const OurPartners = () => {
    return (
        <section className="outPartner position-relative">
            <img src={imgMain} alt="imgMain" className="img-fluid" />
            <Container>
                <div className="row position-absolute">
                    <div className="col-12 col-md-6">
                        <h2 className="outPartner__h2">Our Partners</h2>
                        <p className="outPartner__p">With quality at the heart of every decision they take, IMKAN Misr has partnered with the leading developments to develop and manage state-of-the-art facilities within Alburouj Community.</p>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default OurPartners
