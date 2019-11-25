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
        <div>
          <p>Jordan Ackerman</p>
          <i class="fab fa-github"> GitHub</i>
          <i class="fab fa-linkedin"> LinkedIn</i>
        </div>
      </div>
    </div>)
  }

}

export default AboutDev;