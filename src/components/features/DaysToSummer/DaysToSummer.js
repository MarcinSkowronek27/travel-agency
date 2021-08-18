import React from 'react';
import styles from './DaysToSummer.scss';
// import PropTypes from 'prop-types';
// import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  constructor() {
    super();
  }

  // static propTypes = {
  //   title: PropTypes.string,
  // }

  // static defaultProps = {
  //   title: '',
  // };

  render() {
    const countdownDays = this.getCountdownDay();
    // console.log((new Date('2021-07-14')).getUTCMonth());
    return (
      <div className={styles.component}>
        <h3 className={styles.summerDays}>{countdownDays}</h3>
      </div>
    );
  }

  getCountdownDay() {
    const currentDay = new Date();
    const year = currentDay.getUTCFullYear();
    let summerDay = new Date(`${year}-06-21`);
    const endSummerDay = new Date(`${year}-09-23`);
    const msPerDay = 24 * 60 * 60 * 1000; //milisekundy na dzień
    const timeLeft = (summerDay.getTime() - currentDay.getTime());
    const timeGone = (currentDay.getTime() - endSummerDay.getTime());
    const e_daysGone = timeGone / msPerDay;
    const e_daysLeft = timeLeft / msPerDay; //przelicznik na dni
    let daysLeft = Math.floor(e_daysLeft);
    let daysGone = Math.floor(e_daysGone);
    console.log(daysGone, daysLeft);
    if (timeLeft > 0 && timeGone < 0) {
      daysLeft = daysLeft % 365;
      return (daysLeft + ' days to summer!');
    } else if (timeLeft < 0 && timeGone < 0) {
      return '';
    }
    // } else if (timeLeft < 0 && timeGone < 0) {
    //   summerDay = new Date(`${year + 1}-06-21`);
    //   return daysGone;
    // } else if (daysLeft == 1) {
    //   return (daysLeft + ' day to summer!');
    // }
    // if (daysLeft > 365) {
    //   daysLeft = daysLeft % 365;
    //   return (daysLeft + ' days to summer!');
    // } else if (daysLeft == 1) {
    //   return (daysLeft + ' day to summer!');
    // } else {
    //   // console.log(daysLeft);
    //   return (daysLeft + ' days to summer!');
    // }
  }

}
export default DaysToSummer;
