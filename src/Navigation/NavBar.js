import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Еда</Navbar.Brand>
            <Nav className="me-auto" style={{ marginLeft: 25 }}>
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/:userId/recipes">Рецепты от лучших поваров</Nav.Link>
              <Nav.Link href="/auth">Регистрация</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBar