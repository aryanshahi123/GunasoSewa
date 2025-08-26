import React from "react";
import { Table, Badge, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToComplaint, clearComplaints } from "../slices/complaintSlice";

const ComplaintList = ({ complaints, user }) => {
    const dispatch = useDispatch();

    const getStatusVariant = (status) => {
        switch (status) {
            case "submitted": return "secondary";
            case "in-review": return "warning";
            case "verified": return "info";
            case "solved": return "success";
            default: return "dark";
        }
    };


    const handleStatusChange = (id, newStatus) => {
        dispatch(addToComplaint({ id, status: newStatus }));
    };

    const deleteall = () => {
        dispatch(clearComplaints());
    }

    return (
        <>
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.title}</td>
                            <td>{c.description}</td>
                            <td>{c.type}</td>
                            <td>
                                {user === "admin" ? (
                                    <Form.Select
                                        value={c.status}
                                        onChange={(e) =>
                                            handleStatusChange(c.id, e.target.value)
                                        }
                                    >
                                        <option value="submitted">Submitted</option>
                                        <option value="in-review">In-Review</option>
                                        <option value="verified">Verified</option>
                                        <option value="solved">Solved</option>
                                    </Form.Select>
                                ) : (
                                    <Badge bg={getStatusVariant(c.status)}>{c.status}</Badge>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {user == "admin" ? (<Button variant="danger" className="my-3" onClick={deleteall}>Delete all</Button>) : (console.log())}
        </>

    );
};

export default ComplaintList;
