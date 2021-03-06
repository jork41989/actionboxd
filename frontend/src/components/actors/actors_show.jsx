import React from 'react'
import './actors_show.css'
import ActorsMovieIndexContainer from './actors_movie_index_container';

class ActorsShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getActor(this.props.match.params.actorId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.actorId !== this.props.match.params.actorId){
            this.props.getActor(this.props.match.params.actorId)
        }
    } 

    render() {
        if (!this.props.actor){
            return <div>
                <div className="loading">Loading...</div>
                <div class="lds-ellipsis">
                    <div style={{ backgroundColor: "rgb(255,128,0)" }}>
                    </div><div style={{ backgroundColor: "rgb(0,224,84)" }}>
                    </div><div style={{ backgroundColor: "rgb(64,188,244)" }}></div>
                </div>
            </div>
        }
        return (
            <div className="actor-show-container">
                <div className="actor-show-main">
                    <h1 className="actor-show-header-container">
                        <p className="actor-show-header">FILMS STARRING</p>
                        <p className="actor-show-title">{this.props.actor.name}</p>
                    </h1>
                    <div>
                        <ActorsMovieIndexContainer movies={this.props.actor.movies}/>
                    </div>
                </div>
                <div className="actor-show-sidebar">
                    <div className="actor-image-container">
                        <img className="actor-image" src={this.props.actor.photo_url} alt=""/>
                    </div>
                    <div className="actor-bio">
                        {this.props.actor.bio}
                    </div>
                </div>
            </div>
        )
    }
}

export default ActorsShow;