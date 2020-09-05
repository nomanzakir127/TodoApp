import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Spinner from './Components/Spinner'
import MainPage from './Components/MainPage'

class App extends React.Component {
  state = {
    showSpinner: true
  }

  componentDidMount()
  {
    setTimeout(()=> {
      this.setState({
        showSpinner: false
      })
  },5000)
  }

  render(){
    return (
     <>
          {this.state.showSpinner ? <Spinner/> : <MainPage/>}  
    </>
    
    );
  }
  
}

export default App;
