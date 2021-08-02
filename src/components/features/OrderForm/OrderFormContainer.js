import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  // dlaczego tutaj nie musi być props po state jako argument (powyżej linijka)? Bo nie potrzebujemy propsa, tylko sam stan?
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: arg => dispatch(setOrderOption(arg)),
  // arg jako słowo argument - zobaczymy czy działa
});
// const mapDispatchToProps = (dispatch) => ({
//   setOrderOption: option => dispatch(setOrderOption(option)),
//   // dlaczego tu ma być option?
// });

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
