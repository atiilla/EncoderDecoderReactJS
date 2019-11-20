import React, { Component } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap/'
import faker from 'faker'
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: []
        }
    }


    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faker.image.image()}
                            alt="First slide" height="200px" style={{ objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faker.image.image()}
                            alt="First slide" height="200px" style={{ objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={faker.image.image()}
                            alt="First slide" height="200px" style={{ objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <hr></hr>

            </div>
        );
    }
}

export default Slider;