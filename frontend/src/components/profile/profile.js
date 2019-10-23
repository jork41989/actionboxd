import React from 'react';
import './profile.css'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
        this.state = {
           
        }
        this.count = this.count.bind(this)
    }
    
    componentDidMount(e) {
        // this.poke = this.props.requestSinglePokemon(this.pokeId);
        this.props.requestSingleUser(this.userId).then(response => {

            this.setState({ user: response.user.data });
        })
    }
    count (){
        if (this.state.user.watched_movies){
            return (<p className={'profileHeaderCountsUpper'}>{this.state.user.watched_movies.length}</p>)
        }else {
            return (<p className={'profileHeaderCountsUpper'}>0</p>)
        }
    }
    
    render() {
        if (this.state.user){
            
            
      return ( <div>
          <div className={'profileHeader'}>
              <div className={'profileHeaderUserInfo'}>
                <div className={'Profile-photo'}></div>
                <p className={'Profile-username'}>{this.state.user.username}</p>
              </div>
              <div className={'profileHeaderMovieCount'}>
                {this.count()}
                  <p className={'profileHeaderMovieCountLabel'}>Films</p>
              </div>
            </div>
      </div>  )

        } else {
            
            return (
                <div className={'profileMain'}>
                <div className={'profileHeader'}>
                    <div className={'profileHeaderUserInfo'}>
                        <div className={'Profile-photo'}></div>
                        <p className={'Profile-username'}>John Wick</p>
                    </div>
                    <div className={'profileHeaderMovieCount'}>
                        <p className={'profileHeaderCountsUpper'}>0</p>
                        <p className={'profileHeaderMovieCountLabel'}>Films</p>
                    </div>
                </div>
                <div>
                    <div>
                            <p>RECENTLY WATCHED</p>
                            <p>ALL </p>
                    </div>
                </div>
            </div>
            )
        }
    }
}

export default Profile;
