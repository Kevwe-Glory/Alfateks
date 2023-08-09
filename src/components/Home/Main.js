import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Top from '../TopNav/Top';
import Body from './Body';
import Bottom from './Bottom';

const Main = () => {
    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col>
                        <Top />
                        <Body />
                        <Bottom />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main