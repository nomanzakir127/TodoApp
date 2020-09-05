import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './todo.css'
import {Card, ListGroup,Container, Row, Col} from 'react-bootstrap'
import ToDoTextBox from './ToDoTextBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class ToList extends React.Component{

    state = {
        toDoList : []
    }

    componentDidMount(){
        const {toDoList} = this.props
        this.setState({
            toDoList:[...toDoList]
        })
    }

    handleDelete(){

    }

  render(){
      
    return (
         
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Card style={{ width: '30rem', height:'30rem'}}> 
                        <Card.Body className="overflowAuto">
                            <Card.Title>Reminders</Card.Title>
                            <Card.Text>
                                All reminders
                            </Card.Text>
                            <ToDoTextBox></ToDoTextBox>
                            <ListGroup>
                                {this.state.toDoList.length !==0? this.state.toDoList.toDoList.map(item => <ListGroup.Item key={item.id}> {item.title} <button style={{margin:'0px'}} className="btn btn-default float-right" ><FontAwesomeIcon icon={faTrash} /></button></ListGroup.Item>) : <ListGroup.Item> No Data </ListGroup.Item>} 
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            
        </Container>
            
         
        )
  }
    
 
}

export default ToList;
