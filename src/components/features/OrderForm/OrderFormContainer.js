import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  // dlaczego tutaj nie musi być props po state jako argument (powyżej linijka)? Bo nie potrzebujemy propsa, tylko sam stan?
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
  // przeanalizować powyższą ścieżkę - o co kamaniks
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
