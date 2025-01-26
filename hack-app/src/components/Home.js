import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [queue, setQueue] = useState([]); // State to store queue

    // Fetch the queue from the backend
    const fetchQueue = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/queue");
            setQueue(response.data.queue);
        } catch (error) {
            console.error("Error fetching queue:", error);
        }
    };

    // Fetch the queue when the component loads
    useEffect(() => {
        fetchQueue();
    }, []);

    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#f4f6f9",
                color: "#333",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#004b8d",
                }}
            >
                McHacks 12 Queue System
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "20px", color: "#555" }}>
                A professional ticketing and queue management solution.
            </p>

            {/* Ticket Queue UI */}
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    width: "80%",
                    maxWidth: "600px",
                }}
            >
                <h2
                    style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        marginBottom: "15px",
                        color: "#004b8d",
                    }}
                >
                    Current Ticket Queue
                </h2>
                <ul
                    style={{
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                        textAlign: "left",
                        fontSize: "18px",
                        color: "#555",
                    }}
                >
                    {queue.length > 0 ? (
                        queue.map((ticket, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: "10px",
                                    borderBottom: "1px solid #ddd",
                                }}
                            >
                                Ticket #{ticket}
                            </li>
                        ))
                    ) : (
                        <p style={{ textAlign: "center", color: "#888" }}>
                            No tickets in the queue.
                        </p>
                    )}
                </ul>
            </div>

            <footer
                style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    color: "#777",
                }}
            >
                Built with precision for McHacks 12 | 2025
            </footer>
        </div>
    );
}

export default Home;