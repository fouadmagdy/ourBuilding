import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Header.scss'

import pageLogo from '../images/Our-Buildings.svg'

const Header = () => {
    return (
        <header className="header">
            <Container fluid className="d-flex justify-content-between">
                <Image src={pageLogo} alt="main-logo" />
                <div className="header__langMenu d-flex align-items-center">
                    <ul className="list-inline mr-5">
                        <li className="list-inline-item active">En</li>
                        <li className="list-inline-item">Ar</li>
                    </ul>
                    <div className="header__langMenu--burgerMenu">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
