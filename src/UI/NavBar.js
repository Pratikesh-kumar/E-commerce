import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" text align ='center' variant="dark">
        <Container >
          
          <Nav className="me-auto px-4" >
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
              <button >cart</button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;