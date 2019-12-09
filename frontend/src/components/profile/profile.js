import React from 'react';
import './profile.css'
import ProfileMoviesSampleIndex from './profile_movies_sample_index'
import ProfileMoviesAllIndex from './profile_movies_all_index'
import ProfileReviewSampleIndex from './profile_review_sample_index'
import { Link } from "react-router-dom";

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
        this.ReviewsAllState = this.ReviewsAllState.bind(this)
        this.reviewsAll = this.reviewsAll.bind(this)
    }
    
    componentDidMount(e) {
        // this.poke = this.props.requestSinglePokemon(this.pokeId);
        this.props.requestSingleUser(this.userId).then(response => {

            this.setState({ user: response.user.data, activeComponent: 'profile' });
        })
    }
    MovieCount (){
        if (this.state.user.watched_movies){
            return (<p className={'profileHeaderCountsUpper'}>{Object.values(this.state.user.watched_movies).length}</p>)
        }else {
            return (<p className={'profileHeaderCountsUpper'}>0</p>)
        }
    }

    ReviewCount() {
       
        if (this.state.user.authored_reviews) {
            return (<p className={'profileHeaderCountsUpper'}>{this.state.user.authored_reviews.length}</p>)
        } else {
            return (<p className={'profileHeaderCountsUpper'}>0</p>)
        }
    }

    profilehome(){
        let moviesSample = Object.values(this.state.user.watched_movies).slice(0, 5);
        let reviewSample = this.state.user.authored_reviews.slice(0,3);
        return (
            <div>
                <div className={'profileTextLabel'}>
                    <p className={'profileBodyText'} onClick={this.MoviesAllState}>RECENTLY WATCHED</p>
                    <p className={'profileBodyText'} onClick={this.MoviesAllState} >ALL <i className="fas fa-film"></i></p>
                </div>
                <div>
                    <ProfileMoviesSampleIndex movies={moviesSample} />
                    
                </div>
                <div className={'profileTextLabel'}>
                    <p className={'profileBodyText'} onClick={this.ReviewsAllState}>RECENTLY REVIEWED</p>
                    <p className={'profileBodyText'} onClick={this.ReviewsAllState} >ALL <i class="fas fa-comment"></i></p>
                </div>
                <div>

                    <ProfileReviewSampleIndex reviews={reviewSample} />
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
                <ProfileMoviesAllIndex movies={Object.values(this.state.user.watched_movies)} />
                </div>
            </div>)
    }

    reviewsAll(){
        return (<div>
            <div className={'profileTextLabel'}>
                <p className={'profileBodyText'} >All Reviews</p>
                <p className={'profileBodyText'} onClick={this.profilehomeState}>Back to profile</p>

            </div>
            <div>
                <ProfileReviewSampleIndex reviews={this.state.user.authored_reviews} />
            </div>
        </div>)
    }


    MoviesAllState(){
        this.setState({ activeComponent: 'MoviesAll'})
    }

    ReviewsAllState() {
        this.setState({ activeComponent: 'ReviewsAll' })
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
            case 'ReviewsAll':
                component = (this.reviewsAll())
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
                <div className="profile-photo-container">

                <div className={'Profile-photo'}>
                    <img className="profile-picture-image" src={this.state.user.profilePicture}/>
                </div>
                {/* <Link to={`/users/${this.userId}/settings`}> */}
                    <button 
                        className="settings-button"
                        onClick={() => this.props.openModal({ modal: 'profilePicture' })}
                        >Change</button>
                {/* </Link> */}
                </div>
                <p className={'Profile-username'}>{this.state.user.username}</p>
              </div>
              <div className={'profileHeaderCountsDiv'}>
              <div className={'profileHeaderMovieCount'} onClick={this.MoviesAllState}>
                 {this.MovieCount()}
                  <p className={'profileHeaderMovieCountLabel'}>Films</p>
              </div>
              <div className={'profileHeaderMovieCount'} onClick={this.ReviewsAllState}>
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
