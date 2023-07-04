import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';
import '../Components/Content.css'


function Navigation() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <div style={{display:"flex"}}>
        <img style={{height:"60px"}} src={Logo}></img>
        <h4 style={{fontFamily:"cursive",color:"orangered",marginTop:"20px",marginLeft:"-6px"}}>a's Home</h4>
        </div>
        <div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Link to={"/"} className='nav4' >Home</Link>
            <Link to={"/Favour"} className='nav4' >My cart</Link>
            <Link to={"/Login"} className='nav4' >Login</Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>

    </div>
  )
}

export default Navigation