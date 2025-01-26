import React from "react";
import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundImage from "./index.jpg";

function Games() {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat",
                height: "100vh",  // Full viewport height
                width: "100vw",   // Full viewport width
                justifyContent: "center", 
                alignItems: "center", 
            }}
        >
            <Fragment>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
                    rel="stylesheet"
                />
                <Row>
                <Container
                    style={{
                        display: "flex", // Ensure the container behaves as a flexbox
                        justifyContent: "center", // Horizontally center the content
                        alignItems: "start", // Vertically center the content
                        height: "30vh", // Set the height of the container
                        textAlign: "center", // Center the text
                    }}
                >
                    <Row className="justify-content-center">
                        <Col>
                            <h1
                                style={{
                                    fontFamily: "'Sixtyfour Convergence', sans-serif",
                                    fontSize: "8vw",  // Responsive text size
                                    color: "white",  // White text for contrast
                                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",  // Text shadow for visibility
                                }}
                            >
                                GAMES
                            </h1>
                        </Col>
                    </Row>
                </Container>
                </Row>  
                <Row className="h-50">
                    <Col>
                        <iframe
                            src="https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="Stickman Parkour Game 1"
                        ></iframe>
                    </Col>
                    <Col>
                        <iframe
                            src="https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="Stickman Parkour Game 1"
                        ></iframe>
                    </Col>
                </Row>
                <br />
                <Row className="h-50">
                    <Col>
                        <iframe
                            src="https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="Stickman Parkour Game 1"
                        ></iframe>
                    </Col>
                    <Col>
                        <iframe
                            src="https://cloud.onlinegames.io/games/2024/construct/219/stickman-parkour/index-og.html"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            title="Stickman Parkour Game 1"
                        ></iframe>
                    </Col>
                </Row>
            </Fragment>
        </div>
    );
}

export default Games;
