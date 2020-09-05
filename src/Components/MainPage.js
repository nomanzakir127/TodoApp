import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CarouselComponent from './CarouselComponent'
import ToList from './ToList'

class MainPage extends React.Component{

    state = {
        toDoList : []
    }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/todos')
   .then(response => response.json())
   .then(json => {
      this.setState({
        toDoList : [...json]
      })
  })
  
  }

  render(){
    return (
      <>
         <CarouselComponent></CarouselComponent>
         <ToList toDoList = {this.state.toDoList}></ToList>
      </>
        )
  }
    
 
}

export default MainPage;
