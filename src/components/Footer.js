import React from 'react'
import './Footer.scss'
import { Container, Row, Col, Image, FormControl, Button } from 'react-bootstrap'

import pageLogo from '../images/Our-Buildings.png'
import fb from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col xs={12} md={2} className="footer__1">
                        <Image src={pageLogo} alt="main-logo" className="img-fluid" />
                        <p>the perfect integrated community</p>
                    </Col>
                    <Col xs={12} md={3} className="footer__2">
                        <h5>Sign up to receive the latest updates and news from our team.</h5>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button variant="outline-primary">Subscribe</Button>
                    </Col>
                    <Col xs={12} md={6} className="footer__3">
                        <Row>
                            <Col xs={12} md={4}>
                                <ul className="list-unstyled">
                                    <li>About us</li>
                                    <li>Products</li>
                                    <li>Virtual Tour</li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4}>
                                <ul className="list-unstyled">
                                    <li>Offers</li>
                                    <li>News & Events</li>
                                    <li>About the Developer</li>
                                </ul>
                            </Col>
                            <Col xs={12} md={4}>
                                <ul className="list-unstyled">
                                    <li>Contact Us</li>
                                    <li>Careers</li>
                                    <div className="footer__langMenu d-flex align-items-center">
                                        <ul class="list-inline mr-5">
                                            <li className="list-inline-item active">En</li>
                                            <li className="list-inline-item">Ar</li>
                                        </ul>
                                    </div>
                                </ul>
                            </Col>
                            <Col xs={12} md={4}>
                                <ul className="list-inline footer_social">
                                    <li class="list-inline-item"><Image src={fb} alt="main-logo" className="img-fluid" /></li>
                                    <li class="list-inline-item"><Image src={instagram} alt="main-logo" className="img-fluid" /></li>
                                    <li class="list-inline-item"><Image src={twitter} alt="main-logo" className="img-fluid" /></li>
                                    <li class="list-inline-item"><Image src={youtube} alt="main-logo" className="img-fluid" /></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={8} className="footer_hotline">
                                <p>Hotline  19333</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </footer >
    )
}

export default Footer
