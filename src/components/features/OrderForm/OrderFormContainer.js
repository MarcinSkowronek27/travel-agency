import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  // dlaczego tutaj nie musi być props po state jako argument (powyżej linijka)? Bo nie potrzebujemy propsa, tylko sam stan?
  options: getOrderOptions(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   setOrderOption: option => dispatch(setOrderOption(option)),
//   // dlaczego tu ma być option?
// });

export default connect(mapStateToProps)(OrderForm);
