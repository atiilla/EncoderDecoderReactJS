import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider'
import EncoderDecoder from './EncDec'
class Homepage extends Component {
    render() {
        return (
            <div>
                <Slider />
                <EncoderDecoder />
            </div>
        );
    }
}

export default Homepage;