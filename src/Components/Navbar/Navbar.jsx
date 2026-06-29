import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'


function EcommerceNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:"70px"}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize:"20px"}} >My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" style={{height:"50px", width:"500px"}} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{margin:'5px'}}>Search</Button>

            {/* <button className ="btn btn-primary" style={{height:'40px',marginTop:'6px'}}> 
              <Link to="/login" className="button" style={{color:'white', textDecoration:'None'}}> Signin</Link>
            </button> */}

            <Link to ='/login' className='btn btn-primary' style={{height:'40px',marginTop:'6px'}}>Signin</Link>

          </Form>
          {/* <img src="" alt="" /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcommerceNavbar;