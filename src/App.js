import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import ScrollingText from './components/Scroll/ScrollingText';
import Main from './components/Home/Main';


const App = () => {
  const scrollingText = "WELCOME TO ALFATEKSTRADE.COM>> PAYMENTS WE ACCEPT>> BTC>> ETH>> LITECOIN>> USDT>> STELLAR>> USD-COIN>> BNB>> CONTACT SUPPORT FOR ENQUIRIES.>>.";

  const containerStyle = {
    backgroundColor: 'black', 
    color: 'white',
    // border: '1px solid'
    borderLeft: '1px solid #212121',
    borderRight: '1px solid #212121',
  };

  return (
    <Container>
      <Row>
        <Col>
        <ScrollingText text={scrollingText} />
        <Container style={containerStyle}>
          <Main />
        </Container>
        
        </Col>
      </Row>

    </Container>
  )

}

export default App;
