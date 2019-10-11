import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import marko1 from "./images/marko.jpg";

export const Home = () => (
    <div>
        <h2>Home Page</h2>
        <br/>
        <Container>
            <Row className="show-grib text-center">
                <Col xs={12} sm={3} className="pwerson-wrapper">
                    <Image src={marko1} className="img-fluid" roundedCircle />
                    <h3>Marine</h3>
                </Col>
                <Col xs={12} sm={3} className="pwerson-wrapper">
                    <Image src={marko1} className="img-fluid" roundedCircle />
                    <h3>Christopher</h3>
                </Col>
                <Col xs={12} sm={3} className="pwerson-wrapper">
                    <Image src={marko1} className="img-fluid" roundedCircle/>
                    <h3>Guenole</h3>
                </Col>
                <Col xs={12} sm={3} className="pwerson-wrapper">
                    <Image src={marko1} className="img-fluid" roundedCircle/>
                    <h3>Marko</h3>
                </Col>
            </Row>
        </Container>
        <p>Marko le plus beau</p>
        <p>Record esieaque 2 fois staff 5A, premiere fois dans lhistoire de lecole qu'on voit ca c'est tellmeent etonnant WOUAH.</p>
        
    </div>
    
)