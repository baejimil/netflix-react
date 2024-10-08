import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AppLayout = () => {

    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()

    const searchByKeyword=(event)=>{
        event.preventDefault();
        navigate(`/movies?q=${keyword}`)
        setKeyword('')
    }

  return (
    <div>
        <Navbar bg='black' variant='black' expand="lg" className='bg-item'>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img width={100} src='https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg' alt='' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/" className='nav-item'>Home</Link>
                    <Link to="/movies" className='nav-item'>Movies</Link>
                </Nav>
                <Form className="d-flex" onSubmit={searchByKeyword}>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={keyword}
                    onChange={(event)=>setKeyword(event.target.value)}
                    />
                    <Button variant="outline-danger" type="submit">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
  )
}

export default AppLayout
