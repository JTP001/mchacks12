import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup, Spinner } from "react-bootstrap";
import InputBox from "./InputBox";

function Home() {
    const [queue, setQueue] = useState([]); // State to store queue
    const [loading, setLoading] = useState(true); // State for loading indicator

    // Fetch the queue from the backend
    const fetchQueue = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/queue");
            setQueue(response.data.queue);
        } catch (error) {
            console.error("Error fetching queue:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch the queue when the component loads
    useEffect(() => {
        fetchQueue();
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(https://images-ext-1.discordapp.net/external/w_xgxBhYyAbdCEmW6lKA3qLcXX-BkO--2YZq3RTgQ_c/https/cdn.dribbble.com/users/1770290/screenshots/6142201/bg_73.gif)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white", // Make the text readable on the background
                padding: "20px",
            }}
        >
            {/* Header Section */}
            <Row className="text-center mb-4">
                <Col>
                    <h1 className="display-4">McHacks 12 Queue System</h1>
                    <p className="lead">
                        A professional ticketing and queue management solution.
                    </p>
                </Col>
            </Row>

            {/* Queue Section */}
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow bg-transparent text-white border-light mb-4">
                        <Card.Body>
                            <Card.Title className="mb-4 text-center">
                                Current Ticket Queue
                            </Card.Title>
                            <div
                                style={{
                                    maxHeight: "200px", // Fixed height for the queue box
                                    overflowY: "auto", // Enable vertical scrolling
                                    border: "1px solid rgba(255, 255, 255, 0.6)",
                                    borderRadius: "8px",
                                    padding: "10px",
                                }}
                            >
                                {loading ? (
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="border" variant="light" />
                                    </div>
                                ) : queue.length > 0 ? (
                                    <ListGroup>
                                        {queue.map((ticket, index) => (
                                            <ListGroup.Item
                                                key={index}
                                                className="bg-transparent text-white border-0"
                                            >
                                                Ticket #{ticket}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                ) : (
                                    <p className="text-center text-white">
                                        No tickets in the queue.
                                    </p>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* InputBox Section */}
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow bg-transparent text-white border-light">
                        <Card.Body>
                            <Card.Title className="mb-4 text-center">
                                Add Notes
                            </Card.Title>
                            <InputBox />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Footer Section */}
            <footer className="mt-4 text-center">
                Built with precision for McHacks 12 | 2025
            </footer>
        </div>
    );
}

export default Home;