import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'; 

class CarouselComponent extends React.Component {
 
  state = {
    index : 0
  }

   handleSelect = (selectedIndex, e) => {
    this.setState({
      index : selectedIndex
    })
  };

  render(){
    return (
      
      <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
        height={600} 
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
        height={600} 
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
        height={600} 
      />

     
    </Carousel.Item>
  </Carousel>
    
    )
  }
    
 
}

export default CarouselComponent;
