import { Button, Navbar, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar expand="lg" bg="info">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row>
              <Col><Link to="/mchacks12/"><Button variant="success">Home</Button></Link></Col>
              <Col><Link to="/mchacks12/games/"><Button variant="success">Games</Button></Link></Col>
            </Row>
          </Navbar.Collapse>
          <br/>
          <br/>
        </Container>
      </Navbar>
    );
}

export default MyNavbar