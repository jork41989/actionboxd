import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {getMovieList, emptyList} from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  results: state.ui.searchResults
}) 


const mapDispatchToProps = dispatch => ({
  getMovieList: term => dispatch(getMovieList(term)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);