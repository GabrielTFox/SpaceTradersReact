import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class CurrentUser extends React.Component {
    render() {
        return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>{this.props.symbol}</Navbar.Brand>
                    <Nav>Credits: {this.props.credits}</Nav>
                    <Nav>Faction: {this.props.faction}</Nav>
                </Container>
            </Navbar>
        );
    }
}

export default CurrentUser;