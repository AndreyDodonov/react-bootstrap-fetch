import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const BackForm = () => {
    return (
        <div className="back-form">
            <h1>Свяжитесь с нами</h1>
            <Form >
                <Row>
                    <Col bsPrefix="form">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label bsPrefix="custom-label">Имя</Form.Label>
                            <Form.Control placeholder=""/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label bsPrefix="custom-label">Email</Form.Label>
                            <Form.Control type="email" placeholder=""/>
                        </Form.Group>
                    </Col>
                    <Col bsPrefix="form">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label bsPrefix="custom-label">Телефон</Form.Label>
                            <Form.Control type="phone" placeholder=""/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label bsPrefix="custom-label">Дата записи</Form.Label>
                            <Form.Control type="date" placeholder=""/>
                        </Form.Group>
                    </Col>
                    <Col bsPrefix="form">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label bsPrefix="custom-label">Комментарий (не обязательно)</Form.Label>
                            <Form.Control style={{resize: 'none', width: '364px'}} as="textarea" rows="4" placeholder=""/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group id="formGridCheckbox"
                            >
                    <input type="checkbox" value="None" id="slideOne" name="check"/>
                    <label htmlFor="slideOne"> check </label>
                </Form.Group>

                <Button bsPrefix="custom-button" variant="primary" type="submit">
                    Отправить заявку
                </Button>
            </Form>
        </div>
    )
};

export default BackForm;
