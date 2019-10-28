import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {getMovieList, getActorsList} from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  results: state.ui.searchResults
}) 


const mapDispatchToProps = dispatch => ({
  getMovieList: term => dispatch(getMovieList(term)),
  getActorsList: term => dispatch(getActorsList(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);