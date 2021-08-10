import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
}

// HappyHourAd.PropTypes ={

// };

export default HappyHourAd;
