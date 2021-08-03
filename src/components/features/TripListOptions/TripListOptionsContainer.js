import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  changeDuration: (type,value) => dispatch(changeDuration(type, value)),
  // TODONT - add more dispatchers for other filters
  // dlaczego tutaj nie ma dwóch argumentów funkcji dla addTag i removeTag?
  // dlaczego tu podajemy takie argumenty dla funkcji a nie inne?
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
