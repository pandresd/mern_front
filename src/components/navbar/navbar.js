import React from 'react';
import {  Container, Navbar, Nav,  DropdownButton, Dropdown }  from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from '../login/login'
import Contacto from '../login/Contacto'
import Home from '../login/Home'

export default class menu extends React.Component{
    constructor(props){
        super(props);
        this.state ={}

    }
    render(){
        return(
            <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/Home">Fondetic</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav.Link className="nav-link" as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to={"/login"}>Login</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to={"/contacto"}>Contacto</Nav.Link>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
                           {/*  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
            <Route path="/login">
                            <Login />
            </Route>
            <Route path="/contacto">
                            <Contacto />
            </Route>
            <Route path="/home">
                            <Home />
            </Route>
            </Switch>
            </Router>
            
        );
    }
}
