import React from 'react';
import './profile.css'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
        this.state = {
           
        }
    }
    
    componentDidMount(e) {
        // this.poke = this.props.requestSinglePokemon(this.pokeId);
        this.props.requestSingleUser(this.userId).then(response => {

            this.setState({ user: response.user.data });
        })
    }
    
    render() {
        if (this.state.user){
        
       
      return ( <div>
          <div className={'profileHeader'}>
              <div className={'Profile-photo'}></div>
              <p className={'Profile-username'}>{this.state.user.username}</p>
            </div>
      </div>  )

        } else {
            return (<div>
                <div className={'profileHeader'}>
                    <div className={'Profile-photo'}></div>
                    <p className={'Profile-username'}>John Wick</p>
                </div>
            </div>)
        }
    }
}

export default Profile;
