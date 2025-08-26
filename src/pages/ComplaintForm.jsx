import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addToComplaint } from "../slices/complaintSlice";

const ComplaintForm = ({ }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("sanitation");
    const [status, setStatus] = useState("submitted");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted")
        const newcomp = {
            id: Date.now(),
            title,
            description,
            type,
            status,
        }
        dispatch(addToComplaint(newcomp));



    };


    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mb-4">Submit a Complaint</h2>
                    <Form onSubmit={handleSubmit}>
                        {/* Title */}
                        <Form.Group className="mb-3">
                            <Form.Label>Complaint Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a short title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* Description */}
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter detailed description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {/* Type */}
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="sanitation">Sanitation</option>
                                <option value="road">Road</option>
                                <option value="water">Water</option>
                                <option value="electricity">Electricity</option>
                                <option value="environment">Environment</option>
                                <option value="safety">Safety</option>
                                <option value="traffic">Traffic</option>
                                <option value="public-space">Public Space</option>
                            </Form.Select>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit Complaint
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ComplaintForm;