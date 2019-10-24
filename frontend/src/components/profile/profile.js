import React from 'react';
import './profile.css'
import ProfileMoviesSampleIndex from './profile_movies_sample_index'
import ProfileMoviesAllIndex from './profile_movies_all_index'


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
        this.state = {
           
        }
        this.MovieCount = this.MovieCount.bind(this);
        this.renderComponent = this.renderComponent.bind(this)
        this.profilehome = this.profilehome.bind(this)
        this.MoviesAllState = this.MoviesAllState.bind(this)
        this.moviesAll = this.moviesAll.bind(this)
        this.profilehomeState = this.profilehomeState.bind(this)
        this.ReviewCount = this.ReviewCount.bind(this)
    }
    
    componentDidMount(e) {
        // this.poke = this.props.requestSinglePokemon(this.pokeId);
        this.props.requestSingleUser(this.userId).then(response => {

            this.setState({ user: response.user.data, activeComponent: 'profile' });
        })
    }
    MovieCount (){
        if (this.state.user.watched_movies){
            return (<p className={'profileHeaderCountsUpper'}>{this.state.user.watched_movies.length}</p>)
        }else {
            return (<p className={'profileHeaderCountsUpper'}>0</p>)
        }
    }

    ReviewCount() {
        if (this.state.user.reviews) {
            return (<p className={'profileHeaderCountsUpper'}>{this.state.user.reviews.length}</p>)
        } else {
            return (<p className={'profileHeaderCountsUpper'}>0</p>)
        }
    }

    profilehome(){
        let moviesSample = this.state.user.watched_movies.slice(0, 5)
        return (
            <div>
                <div className={'profileTextLabel'}>
                    <p className={'profileBodyText'} onClick={this.MoviesAllState}>RECENTLY WATCHED</p>
                    <p className={'profileBodyText'} onClick={this.MoviesAllState} >ALL <i className="fas fa-film"></i></p>
                </div>
                <div>
                    <ProfileMoviesSampleIndex movies={moviesSample} />
                </div>
            </div>
        )
    }

    moviesAll(){
        return (<div>
            <div className={'profileTextLabel'}>
                <p className={'profileBodyText'} >All Watched Films</p>
                <p className={'profileBodyText'} onClick={this.profilehomeState}>Back to profile</p>
                
            </div>
                <div>
                    <ProfileMoviesAllIndex movies={this.state.user.watched_movies} />
                </div>
            </div>)
    }

    MoviesAllState(){
        this.setState({ activeComponent: 'MoviesAll'})
    }
    profilehomeState(){
        this.setState({ activeComponent: 'profile' })
    }
    renderComponent(){
        let component;
        switch (this.state.activeComponent) {
            case 'profile':
                component = (this.profilehome())
                break;
            case 'MoviesAll':
                component = (this.moviesAll())
                break;
            default:
                return null;
        }
        return (
            component
        )
    }
    
    render() {
        if (this.state.user){
            
            
      return ( <div>
          <div className={'profileHeader'}>
              <div className={'profileHeaderUserInfo'}>
                <div className={'Profile-photo'}></div>
                <p className={'Profile-username'}>{this.state.user.username}</p>
              </div>
              <div className={'profileHeaderCountsDiv'}>
              <div className={'profileHeaderMovieCount'} onClick={this.MoviesAllState}>
                 {this.MovieCount()}
                  <p className={'profileHeaderMovieCountLabel'}>Films</p>
              </div>
              <div className={'profileHeaderMovieCount'} onClick={this.MoviesAllState}>
                      {this.ReviewCount()}
                  <p className={'profileHeaderMovieCountLabel'}>Reviews</p>
              </div>
              </div>
            </div>
          <div>
             {this.renderComponent()}
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
                        <div className={'profileTextLabel'}>
                            <p className={'profileBodyText'}>RECENTLY WATCHED</p>
                            <p className={'profileBodyText'} >ALL <i className="fas fa-film"></i></p>
                        </div>
                        <div>
                            
                        </div>
                </div>
            </div>
            )
        }
    }
}

export default Profile;
