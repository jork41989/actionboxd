import React from 'react'

class ActorsShow extends React.Component {

    componentDidMount() {
        this.props.getActor(this.props.match.params.actorId)
    }
    
    render() {
        return (
            <div>
                hello this belongs to an actor
            </div>
        )
    }
}

export default ActorsShow;