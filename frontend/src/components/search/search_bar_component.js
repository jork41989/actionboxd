import {connect} from 'react-redux';
import SearchBar from './search';
import {getMovieList} from '../../util/movies_api_util';

const mapDispatchToProps = dispatch => ({
  getMovieList: term => dispatch(getMovieList(term))
});

export default connect(null, mapDispatchToProps)(SearchBar);