import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <hr></hr>
                        <footer className='footer mt-auto py-3 bg-dark text-white'>
                            <div className='container'>© Copyright 2019 Injecti0n</div>
                        </footer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;