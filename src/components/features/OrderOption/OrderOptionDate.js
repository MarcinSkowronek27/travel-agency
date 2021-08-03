import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <DatePicker
        className={styles.input}
        selected={startDate}
        dateFormat="yyyy/MM/dd"
        placeholderText="Click to select a date"
        onChange={date => setStartDate(setOptionValue(date))}
        isClearable={true} />
    </div>
  );
};

OrderOptionDate.propTypes = {
  date: PropTypes.number,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};
export default OrderOptionDate;
