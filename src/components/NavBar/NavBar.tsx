import React from 'react';
// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
// router
import { Link, NavLink } from 'react-router-dom';
// img
import cycling from 'assets/img/cycling.png';
// styles
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Brand as={Link} to='/catalog' className={styles.logo}>
          <img src={cycling} color='white' width='30' alt='img' />
        </Navbar.Brand>
        <Navbar.Offcanvas id='basic-navbar-nav' >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {/* GrowPro */}
              My App
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <NavLink
                className={({ isActive }) => (
                  isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`
                )}
                to='/catalog'
              >
                Catalog
              </NavLink>
              <NavLink
                className={({ isActive }) => (
                  isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`
                )}
                to='/'
              >
                Rentals
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;