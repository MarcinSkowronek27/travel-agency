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
    title: '21 days to summer!',
  };

  render() {
    // const countdownTime = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.summerDays}>{this.props.title}</h3>
      </div>
    );
  }

}
export default DaysToSummer;
