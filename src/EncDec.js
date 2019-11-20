import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Base64 } from 'js-base64';

class EncDec extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAlgoritma = this.handleAlgoritma.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleEncodedText = this.handleEncodedText.bind(this);
        this.state = {
            res: [],
            algoritma: [],
            text: [],
            encodedtext: []
        };
    }



    handleSubmit(e) {
        e.preventDefault();
        // const data = new FormData(e.target);
        this.setState({
            //  res: stringifyFormData(data),
            selectValue: e.target.value
        });

    }

    handleAlgoritma(e) {
        e.preventDefault();
        // const data = new FormData(e.target);
        this.setState({
            //  res: stringifyFormData(data),
            algoritma: e.target.value

        });


    }

    handleText(e) {
        e.preventDefault();
        // const data = new FormData(e.target);

        this.setState({
            //  res: stringifyFormData(data),
            text: e.target.value

        });


        this.setState({
            encodedtext: Base64.encode(this.state.text)
        })


    }

    handleEncodedText(e) {
        e.preventDefault();
        // const data = new FormData(e.target);
        this.setState({
            //  res: stringifyFormData(data),
            encodedtext: e.target.value

        });

        this.setState({
            text: Base64.decode(this.state.encodedtext)
        })


    }






    render() {

        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="algoritma" >Cryptography</label>
                        <select onChange={this.handleAlgoritma} className="form-control" id="algoritma">
                            <option value="base64">Base64</option>
                            <option value="md5">Md5</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="decoded">Original Text</label>
                        <textarea onChange={this.handleText} className="form-control" id="decoded" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="encoded">Encoded Text</label>
                        <textarea onChange={this.handleEncodedText} className="form-control" id="encoded" rows="3"></textarea>
                    </div>
                </form>






                {this.state.res && (
                    <div className="res-block">
                        <h3>Data to be sent:</h3>
                        <pre> {this.state.res}
                            {"\nSelected algorithm: " + this.state.algoritma + "\nOriginal String: " + this.state.text + "\nEncoded String: " + this.state.encodedtext}</pre>
                    </div>
                )}
            </div>
        );
    }
}

export default EncDec;
/*
function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}


*/
/*
      <Form ref="form" onSubmit={this.handleSubmit}>

                    <Form.Group controlId="decodedString">
                        <Form.Label>Original String</Form.Label>
                        <Form.Control as="textarea" name="originaltext" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="encodedString">
                        <Form.Label>Encoded String</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Cryptography Algorithm</Form.Label>
                        <Form.Control as="select">
                            <option>Base64</option>
                            <option>Md5</option>
                            <option>AES256</option>
                            <option>TwoFish</option>
                            <option>SHA256</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="dark" type="submit">Encoder/Decoder</Button>
                </Form>

                {console.log(ReactDOM.findDOMNode(this.refs.Form))}

                */