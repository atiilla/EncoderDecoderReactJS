import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap/'
import faker from 'faker'
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slider: []
        }
    }



    componentDidMount(){
        for(let i =0; i <3; i++){
            const sliders = [faker.image.image()]

            this.setState(prevState=>({
                slider:[...prevState.slider,sliders]
            }))
        }
    }

    render() {
        return (
            <div>

                <Carousel>
                    {
                        this.state.slider.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide" height="200px" style={{ objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                    <h3>Slider1</h3>
                                    <p>Description</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <hr></hr>

            </div>
        );
    }
}

export default Slider;