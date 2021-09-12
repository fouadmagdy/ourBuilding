import React, { useState, useEffect } from 'react'

import { Container, Row, Image, Col } from 'react-bootstrap'
import './Construction.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
    Scrollbar,
    Lazy
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/scrollbar/scrollbar.scss"


SwiperCore.use([Scrollbar, Lazy]);

const Construction = () => {

    const [max, setMax] = useState(0)
    const [images, setImages] = useState([]);
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        fetchImages();
    }, [limit]);

    const fetchImages = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                setMax(data.length)
                setImages(data);
            })
            .catch(err => console.log(err));
    };

    const handleShowMoreImages = () => {

        if (limit <= max) {
            setLimit(limit + 3);
        }
    };

    return (
        <section className="construction">
            <Container fluid>
                <Row className="d-flex align-items-center h-100">
                    <Col xs={12} md={3} className="construction__h2">
                        <h2>Construction</h2>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row className="mb-4">
                            <Col xs={12} md={2}>
                                <select >
                                    <option selected>February 2020</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col xs={12} md={2}>
                                <select>
                                    <option selected>Unit Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                        </Row>
                        <Swiper scrollbar={{
                            "hide": false
                        }} className="mySwiper" slidesPerView={2} onSlideChange={() => handleShowMoreImages()} >
                            {
                                images.slice(0, limit).map(slid => (
                                    <SwiperSlide key={slid.id}>
                                        <Image key={slid.id} src={slid.url} alt={slid.title} className="img-fluid" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default Construction