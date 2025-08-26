import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router";

const HomePage = () => {
    return (
        <>
            <div className="bg-dark text-light text-center d-flex flex-column justify-content-center vh-100">
                <Container>
                    <h1 className="display-3 fw-bold">Welcome to Gunasopeti</h1>
                    <p className="lead">
                        A platform where you can raise your voice and complain about issues happening around you.
                    </p>
                    <Button variant="primary" size="lg" href="#about">
                        Learn More
                    </Button>
                </Container>
            </div>
            {/* About Section */}
            <Container id="about" className="my-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2>What is Gunasopeti?</h2>
                        <p>
                            Gunasopeti is a digital platform that allows users to file complaints about social,
                            environmental, and civic issues in their community. Our mission is to give people a
                            voice and ensure their concerns reach the right place.
                        </p>
                        <p>
                            Whether it’s garbage mismanagement, water supply issues, or any other problem, you can
                            report it here and be part of the change.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="bg-primary text-light text-center py-5">
                <h2>Ready to Make a Change?</h2>
                <p className="lead">Join Gunasopeti today and let your voice be heard.</p>
                <Button variant="light" size="lg" as={Link} to="/complaints/new">
                    Get Started
                </Button>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-light text-center py-3" id="contact">
                <Container>
                    <p className="mb-1">© {new Date().getFullYear()} Gunasopeti. All rights reserved.</p>
                    <small>Contact: support@gunasopeti.com</small>
                </Container>
            </footer>
        </>
    );
};

export default HomePage;