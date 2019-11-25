import React from 'react';


class AboutDev extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (<div>
      <div onClick={this.props.closeModal} className="close-x">X</div>
    </div>)
  }

}

export default AboutDev;