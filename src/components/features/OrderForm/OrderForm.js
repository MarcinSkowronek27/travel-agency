import React from 'react';
// import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

const OrderForm = ({ tripCost, options, setOrderOption }) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption key={option.name}
            {...option}
            currentValue={options[option.id]}
            setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
