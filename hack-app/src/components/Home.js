import { Fragment, Button } from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [queue, setQueue] = useState([]); // State to store queue

    // Fetch the queue from the backend
    const fetchQueue = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/queue');
            setQueue(response.data.queue);
        } catch (error) {
            console.error('Error fetching queue:', error);
        }
    };

    // Fetch the queue when the component loads
    useEffect(() => {
        fetchQueue();
    }, []);

    return (
        <Fragment>
            <h1>
                McHacks 12 group project
            </h1>

            <p>This website is currently unfinished.</p>


            {/* Ticket Queue UI */}
            <div style={{ padding: '20px' }}>
                <h1>Ticket Queue</h1>

                {/* Display the queue */}
                <div>
                    <h3>Current Queue:</h3>
                    <ul>
                        {queue.map((ticket, index) => (
                            <li key={index}>{ticket}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;