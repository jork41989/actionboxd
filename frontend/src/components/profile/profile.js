import React from 'react';
import './profile.css'


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser)
        
    }

    componentWillReceiveProps(newState) {
        
    }   
    
    render() {
      return ( <div>
          <div className={'profileHeader'}>
              <div className={'Profile-photo'}></div>
              <p className={'Profile-username'}>Username goes here</p>
            </div>
      </div>  )
    }
}

export default Profile;
