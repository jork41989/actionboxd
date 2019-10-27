import React from 'react'
import './actors_show.css'

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
            return <div>Loading...</div>
        }
        return (
            <div className="actor-show-container">
                <div className="actor-show-main">
                    <h1 className="actor-show-header-container">
                        <p className="actor-show-header">FILMS STARRING</p>
                        <p className="actor-show-title">{this.props.actor.name}</p>
                    </h1>
                </div>
                <div className="actor-show-sidebar">
                    <div className="actor-image-container">
                        <img className="actor-image" src={this.props.actor.photo_url} alt=""/>
                    </div>
                    {this.props.actor.bio}
                </div>
            </div>
        )
    }
}

export default ActorsShow;