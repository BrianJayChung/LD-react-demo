import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, FormControl, Form, Badge, NavDropdown, DropdownButton, Dropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from './ThemeContext'
import Settings from './settings/Settings'
import Home from '../components/Home'
import './Footer.css'

const Header = () => {

    const [state, setState] = useState({
        themeValue: localStorage.getItem('theme'),
        dropDownStyle: "left"
    })

    const {value, setValue} = useContext(ThemeContext)

    function dropDownClick(){
        console.log('nav is selected')
    }
    

    function onButtonClick(eventKey) {
        console.log("drop down clicked")
        setValue(eventKey)
        localStorage.setItem('theme', eventKey)
        return <Home />
    }

    function checkActiveDropdown(dropdown) {
        return dropdown === value
    }

    return (
        <Navbar bg="dark" variant="dark" expand="xl" className="navbar-custom">
            <Link to="/home">
                <Navbar.Brand>
                    <FontAwesomeIcon icon={faHome} size="lg" style={{ paddingRight: "5px" }}/>
                    Support Service
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/healthcare">Solutions</Nav.Link>
                    <Nav.Link as={Link} to="/login">Pricing</Nav.Link>
                    <NavDropdown title="features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Experimentation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Feature Management</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Operation</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Learn more</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <h6 style={{ paddingRight: '2rem', paddingTop: '0.5rem', color: 'white'}}>
                        Messages <Badge variant="success">4</Badge>
                    </h6>
                    <h6 style={{ paddingRight: '2rem', paddingTop: '0.5rem', color: 'white'}}>
                        Notifications <Badge variant="success">2</Badge>
                    </h6>
                    <Form inline style={{ paddingRight: '0.1rem' }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                <span style={{ paddingRight:'0.5rem'}}>
                    <Link to='/login'>
                    <Button onClick={ dropDownClick } variant="outline-light" size="sm" style={{ border: 'none'}}>Sign In</Button>
                    </Link>
                </span>
                <Button variant="outline-light" size="md" style={{ margin: "0.1rem" }}>Sign Up</Button>
                <Nav>
                    <DropdownButton size="sm" variant="success" title={ value } style={{ margin:'0.3rem' }} alignRight >
                        <Dropdown.Item disabled>
                            <span style={{ fontWeight: 'bold', color: 'black'}}>
                            Themes
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onSelect={ () => onButtonClick('healthcare') } active={checkActiveDropdown('healthcare')}>Healthcare</Dropdown.Item>
                        <Dropdown.Item onSelect={ () => onButtonClick('saas') } active={checkActiveDropdown('saas')}>Saas</Dropdown.Item>
                        <Dropdown.Item onSelect={ () => onButtonClick('financial') } active={checkActiveDropdown('financial')}>Financial</Dropdown.Item>
                        <Dropdown.Item onSelect={ () => onButtonClick('default') } active={checkActiveDropdown('default')}>Default</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default withRouter(Header);