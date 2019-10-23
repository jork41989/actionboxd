import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Trailer from './trailer';

const mapStateToProps = (state, ownProps) => {
    debugger;
    return({

    })

}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trailer);