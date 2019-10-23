import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Trailer from './trailer';

const mapStateToProps = (state) => {
    debugger;
    return({

    })

}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(null, mapDispatchToProps)(Trailer);