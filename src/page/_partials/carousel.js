import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import imgcaro from "../../image/jr.png"

const CarouselComp = () => {
    return <div className="hero-header">
        {
            <Container>
                <Row className="g-5 align-items-center">
                    <Col md="6" className="text-center" >
                        <h1>Hi! Saya Joko Riyadi</h1>
                        <p>Selamat Datang di Website PortoFolio Saya!</p>
                    </Col>
                    <Col md="6" className="col-lg-6 text-center text-lg-start p-3">
                        <img
                            className="img-fluid animated zoomIn"
                            src={imgcaro}
                            alt="" />
                    </Col>
                </Row>
            </Container>

        }
    </div>
}

export default CarouselComp