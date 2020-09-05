import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Spinner.css';

function Spinner() {
 

    return (
      
        <div className="text-center vcenter">
          <div className="spinner-grow spinner-size text-success">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      
      )
 
}

export default Spinner;
