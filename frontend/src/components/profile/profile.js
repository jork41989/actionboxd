import React from 'react';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        
    }

    componentWillReceiveProps(newState) {
        
    }   
    
    render() {
      return ( <div>Hello world</div>  )
    }
}

export default Profile;