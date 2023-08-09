import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Logo1 from '../../../src/assets/logo-1.webp';
import Logo2 from '../../../src/assets/logo-2.webp';
import Logo3 from '../../../src/assets/logo-3.webp';
import Logo4 from '../../../src/assets/logo-4.webp';
import Logo5 from '../../../src/assets/logo-5.webp';
import Logo6 from '../../../src/assets/logo-6.webp';


const Bottom = () => {
  return (
    <Container>
      <Row>
        <Col>
        <h3>TRUSTED BY OVER 200K USERS WORLDWIDE</h3>
        </Col>
        <Col>
          <div>
            <img src={Logo1} alt="Logo"/>
            <img src={Logo2} alt="Logo" />
            <img src={Logo3} alt="Logo" />  
            <img src={Logo4} alt="Logo" />
            <img src={Logo5} alt="Logo" />
            <img src={Logo6} alt="Logo" />
          </div>
        </Col>
      </Row>
      </Container>
  );
};

export default Bottom;