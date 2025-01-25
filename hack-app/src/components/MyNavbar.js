import { Button, Navbar, Nav, Container } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar expand="lg" bg="info">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="">Home</Nav.Link>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    );
}

export default MyNavbar