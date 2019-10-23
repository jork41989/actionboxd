import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import Trailer from './trailer';

const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.location.pathname.split("/")[2];
    return({
        movie: state.entities.movies[movieId]
    })

}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trailer));