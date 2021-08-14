import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';
// import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  constructor() {
    super();
  }

  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: ' days to summer!',
  };

  render() {
    const days = this.getCountdownDay();

    return (
      <div className={styles.component}>
        <h3 className={styles.summerDays}>{days}{this.props.title}</h3>
      </div>
    );
  }

  getCountdownDay() {
    const currentDay = new Date();
    const summerDay = new Date('June 21, 2022');
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeLeft = (summerDay.getTime() - currentDay.getTime());
    const e_daysLeft = timeLeft / msPerDay;
    let daysLeft = Math.floor(e_daysLeft);
    if (daysLeft > 365) {
      daysLeft = daysLeft % 365;
      return daysLeft;
    }
    // console.log(daysLeft);
    return daysLeft;
  }


}
export default DaysToSummer;
