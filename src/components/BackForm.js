import React, {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

class BackForm extends Component {

    state = {
        loading: false,
        data: []
    };

    componentDidMount() {

        fetch('../db.json')
            .then(response => response.json())
            .then(data => {
                // console.log('data ', data.components[0].metadata.images[1]);
                this.setState({
                    content: data,
                    isLoad: false,
                    data: data.form,
                    nameForm: data.form.fields[0].label,
                    nameFormReq: data.form.fields[0].required,
                    nameFormType: data.form.fields[0].type
                })
            });
    }


    render() {
        return (
            <div className="back-form">
                <h1 className="col-md-8">{this.props.backFormTitle}</h1>
                <Form>
                    <Row>
                        <Col bsPrefix="col-md-4 form">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label bsPrefix="custom-label">{this.state.nameForm} </Form.Label>
                                <Form.Control required={this.state.nameFormReq}
                                              type={this.state.nameFormType}
                                              placeholder=""/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label bsPrefix="custom-label">Email</Form.Label>
                                <Form.Control type="email" placeholder=""/>
                            </Form.Group>
                        </Col>
                        <Col bsPrefix="col-md-4 form">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label bsPrefix="custom-label">Телефон</Form.Label>
                                <Form.Control type="phone" placeholder=""/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label bsPrefix="custom-label">Дата записи</Form.Label>
                                <Form.Control type="date" placeholder=""/>
                            </Form.Group>
                        </Col>
                        <Col bsPrefix="col-md-4 form">
                            <Form.Group
                                as={Col}
                                style={{margin: 0, width: '364px'}}
                                controlId="exampleForm.ControlTextarea1">
                                <Form.Label bsPrefix="custom-label">Комментарий (не обязательно)</Form.Label>
                                <Form.Control style={{resize: 'none', width: '364px', height: '120px'}}
                                              as="textarea"
                                              rows="4"
                                              placeholder=""
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col bsPrefix="col-md-8 form">
                        <Form.Group id="formGridCheckbox"
                        >
                            <input className="custom-checkbox" type="checkbox" value="None" id="check-personal"
                                   name="check"/>
                            <label className="custom-label" htmlFor="check-personal"> Я даю согласие на обработку
                                персональных данных согласно политике конфиденциальности. </label>
                        </Form.Group>

                        <Button bsPrefix="custom-button" variant="primary" type="submit">
                            Отправить заявку
                        </Button>
                    </Col>

                </Form>
            </div>
        )
    }


}

export default BackForm;
