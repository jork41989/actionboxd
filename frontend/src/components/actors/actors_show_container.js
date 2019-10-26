import { connect } from 'react-redux';
import { getActor } from '../../actions/actor_actions';
import ActorsShow from './actors_show';


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getActor: (id) => dispatch(getActor(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActorsShow);