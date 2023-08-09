import React from 'react';
import Logo from './ICO-hero-image.png'
import { Container,Row,Col, Button } from 'react-bootstrap';


const Body = () => {
    return (
        <Container>
            <Row>
            <Col >
            <h1>Earn Weekly Profits From Your Crypto</h1>
            <h1>Get Crypto Backed Loans Anytime</h1>
            <p>Now earn up to 36% interest on USD stablecoins or crypto weekly, borrow USD stablecoins, and trade in over 100 cryptocurrencies, all-in-one simple, secure and trusted place.</p>
            <Button className='select'>Get Started Now</Button>
            </Col>
            <Col><img src={Logo} alt="body" /></Col>
            </Row>
        </Container>
    )
}

export default Body