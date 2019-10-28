import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions';
import { getMostRecentReviews } from '../../actions/review_actions';
import MoviesIndex from './movies_index';
import { watchAMovie, unwatchAMovie } from '../../actions/users_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {{
    return ({    
        movies: Object.values(state.entities.movies),
        reviews: Object.values(state.entities.reviews).sort((a, b) => (a.date < b.date) ? 1 : -1),
        currentUser: state.session.user
        
    })
    }
} 

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch(getMovies()),
    getMostRecentReviews: () => dispatch(getMostRecentReviews()),
    openModal: (modal) => dispatch(openModal(modal)),
    watchAMovie: (userId, payload) => dispatch(watchAMovie(userId, payload)),
    unwatchAMovie: (userId, payload) => dispatch(unwatchAMovie(userId, payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);