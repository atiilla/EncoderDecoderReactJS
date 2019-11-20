import React, { Component } from 'react';
import Header from './Header'
import Homepage from './Homepage'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Homepage />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Footer />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;