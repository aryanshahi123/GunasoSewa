import React from "react";
import { Container } from "react-bootstrap";
import ComplaintList from "../components/ComplaintList";
import { useSelector } from "react-redux";

const HistoryPage = ({ currentUser }) => {
    const userComplaints = useSelector((state) => state.complaint.complaints);

    return (
        <Container className="my-5">
            {currentUser === "local" ? (
                <h2 className="mb-4 text-center">My Complaints</h2>
            ) : (
                <h2 className="mb-4 text-center">All Complaints</h2>
            )}

            {userComplaints.length > 0 ? (
                <ComplaintList complaints={userComplaints} user={currentUser} />
            ) : currentUser === "local" ? (
                <p className="text-center text-muted">
                    You haven’t submitted any complaints yet.
                </p>
            ) : (
                <p className="text-center text-muted">No complaints yet.</p>
            )}
        </Container>
    );
};

export default HistoryPage;
