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
    // const msPerDay = 24 * 60 * 60 * 1000; //milisekundy na dzień
    let timeLeft = DateCalc((summerDay.getTime() - currentDay.getTime()));
    const timeGone = (currentDay.getTime() - endSummerDay.getTime());
    // const e_daysLeft = timeLeft / msPerDay; //przelicznik na dni
    // let daysLeft = timeLeft;
    // console.log(daysGone, daysLeft);
    if (timeLeft > 0 && timeGone < 0 && timeLeft !== 1) {
      timeLeft = timeLeft % 365;
      return (timeLeft + ' days to summer!');
    } else if (timeLeft < 0 && timeGone < 0) {
      return '';
    } else if (timeLeft < 0 && timeGone > 0) {
      summerDay = new Date(`${year + 1}-06-21`);
      const nextSummer = DateCalc((summerDay.getTime() - currentDay.getTime()));
      return (nextSummer + ' days to summer!');
    } else if (timeLeft == 1) {
      return (timeLeft + ' day to summer!');
    }
    function DateCalc(arg) {
      const msPerDay = 24 * 60 * 60 * 1000;
      return Math.floor(arg / msPerDay);
    }
  }
}
export default DaysToSummer;
