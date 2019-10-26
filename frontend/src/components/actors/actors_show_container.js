import { connect } from 'react-redux';
import { getActor } from '../../actions/actor_actions';
import ActorsShow from './actors_show';


const mapStateToProps = (state, ownProps) => ({
    actor: state.entities.actors[ownProps.match.params.actorId]
})

const mapDispatchToProps = dispatch => ({
    getActor: (id) => dispatch(getActor(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActorsShow);