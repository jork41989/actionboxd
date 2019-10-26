import React from 'react'

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
            <div>
                {this.props.actor.name}
            </div>
        )
    }
}

export default ActorsShow;