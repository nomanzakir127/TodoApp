import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Form, Button, Col, Row} from 'react-bootstrap'

function ToDoTextBox() {
 
    return (
      
      <>
        <Form>
            <Row>
                <Col xs={8}>
                    <Form.Group controlId="formAddTodo">
                        <Form.Control type="text" placeholder="Enter Todo" />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Button variant="primary" type="submit">
                        Add Todo
                    </Button>
                </Col>
            </Row>
        </Form>
      </>
      
      )
 
}

export default ToDoTextBox;
