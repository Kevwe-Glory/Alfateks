import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ScrollingText.css';

const ScrollingText = ({ text }) => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const newPos = window.scrollY;
        setScrollPos(newPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container className="scrolling-text-container">
        <div className="scrolling-text" style={{ transform: `translateX(-${scrollPos}px)` }}>
            {text}
        </div>
        </Container>
    );
};

export default ScrollingText;
