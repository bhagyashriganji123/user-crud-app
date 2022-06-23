import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
//  import { Link } from 'react-router-dom';

const Menubar = () => {
  return (
    <div>
    <Navbar color='dark' dark>
        <NavbarBrand href='/'>My Team</NavbarBrand>
        <Nav className='ml-auto' navbar>
            <NavItem>
                {/* <Link to='/addUser' className='btn btn-primary'>AddUser</Link> */}
            </NavItem>
        </Nav>
    </Navbar>
</div>
  )
}

export default Menubar
