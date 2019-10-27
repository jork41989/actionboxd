import React from 'react';
import './admin.css'

class AdminPortal extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return (

      <div>
        
        <p className={'Admin-welcome'}> Hello {this.props.currentUser.username}</p>
        <div>
        <button>Add Movie</button>
        <button>Add Actor</button>  
        </div>
      </div>
    )
  }
}

export default AdminPortal;