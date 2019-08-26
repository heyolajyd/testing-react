import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DateButton = ({ onClickButton }) => (
  <div className="button-container">
    <Button variant="extendedFab" onClick={onClickButton} color="primary">
      Display Date
    </Button>
  </div>
);

DateButton.propTypes = {
  onClickButton: PropTypes.func
};

export default DateButton;
