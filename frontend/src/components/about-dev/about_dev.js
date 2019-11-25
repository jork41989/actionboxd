import React from 'react';
import "./dev.css"

class AboutDev extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (<div className="devDivBG">
      <div className="devDivBody">
      < div onClick={this.props.closeModal} className="close-x">X</div>
    
      
        <p className="DevHead">Meet The Developers</p>
        <div className="devMain">
          <div className="devIndi">
            <p className="devName">Jordan Ackerman</p>
            <a href="https://github.com/jork41989" className="devLink"><i class="fab fa-github devLink"> GitHub</i></a>
            <a href="https://www.linkedin.com/in/ackermanjordan/" className="devLink"><i class="fab fa-linkedin devLink"> LinkedIn</i></a>
          </div>
          <div className="devIndi">
            <p className="devName">Frida Pulido</p>
            <a href="https://github.com/FridaPolished" className="devLink"><i class="fab fa-github devLink"> GitHub</i></a>
            <a href="https://www.linkedin.com/in/frida-pulido/" className="devLink"><i class="fab fa-linkedin devLink"> LinkedIn</i></a>
          </div>
          <div className="devIndi">
            <p className="devName">Gabriel Antonio Barrios Hernandez</p>
            <a href="https://github.com/gbarrios212" className="devLink"><i class="fab fa-github devLink"> GitHub</i></a>
            <a href="https://www.linkedin.com/in/gabriel-antonio-barrios" className="devLink"><i class="fab fa-linkedin devLink"> LinkedIn</i></a>
          </div>
        </div>
      </div>
    </div>)
  }

}

export default AboutDev;