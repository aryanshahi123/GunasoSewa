import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaHistory, FaStickyNote } from "react-icons/fa";
import { Link } from "react-router";

function Header() {
    return (
        <>

            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        GunasoPeti
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/complaints/new">
                                <FaStickyNote /> Submit
                            </Nav.Link>
                            <Nav.Link as={Link} to="/history">
                                <FaHistory /> History
                            </Nav.Link>
                            <NavDropdown title="admin">
                                <NavDropdown.Item as={Link} to="/adminpanel">
                                    AdminPanel
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
