import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded"  light expand="md">
                    <NavbarBrand href="/">The Poker Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.props.logout} />
                    <NavbarToggler onClick= {this.props.tournament} />
                    
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <Button onClick={() => this.props.clickTournament()}>Tournament</Button>
                            </NavItem> */}
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;