import React from 'react'
import Footer from './Footer'
import './Virtualtour.scss'

import { Container, Image, Col, Button } from 'react-bootstrap'
import virtualTourImg from '../images/virtualTour.png'
import rotate360 from '../images/rotate-360.svg'

const Virtualtour = () => {
    return (
        <section className="virtualTour text-center">
            <Container fluid className="pt-20rem">
                <div className="position-relative">
                    <Image src={virtualTourImg} className="img-fluid" alt="" />
                    <div className="position-absolute">
                        <h2 className="text-white">VIRTUAL TOUR <br /> AT <span className="gold-color">BUILDINGS</span></h2>
                    </div>
                    <div className="position-absolute text-left virtualTour--p">
                        <Col xs={12} md={6}>
                            <p>ENJOY A VIRTUAL TOUR AT Buildings FROM THE COMFORT OF YOUR HOME</p>
                            <p>Instead, it utilizes it to create unique minimalistic yet green neighborhoods based on connecting inhabitants closely to the nature that surrounds them.</p>
                            <Button variant="outline-primary text-white"><Image src={rotate360} className="img-fluid" alt="" /> 360° eXPeRiENCE</Button>
                        </Col>
                    </div>
                </div>
            </Container>
            <Footer />
        </section>
    )
}

export default Virtualtour
