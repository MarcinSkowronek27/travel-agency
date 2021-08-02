import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ price, currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input type='number' className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
