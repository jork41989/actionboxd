import React from 'react';
import './admin.css'
import { openModal } from '../../actions/modal_actions';

class AdminPortal extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount(){
    if (!this.props.currentUser.admin) {
      this.props.history.push('/')
    }
  }

  render(){
    return (

      <div>
        
        <p className={'Admin-welcome'}> Hello {this.props.currentUser.username}</p>
        <div className={'Admin-Buttons-div'}>
          <button className={'Admin-Buttons'} onClick={() => this.props.openModal({ modal: 'movie' })}>Add Movie</button>
          <button className={'Admin-Buttons'} >Add Actor</button>  
        </div>
      </div>
    )
  }
}

export default AdminPortal;