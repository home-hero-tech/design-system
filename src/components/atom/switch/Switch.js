import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSwitch from 'react-switch';

import css from './Switch.module.scss';

const Switch = ({ checked, ...otherProps }) => {
  const classes = classNames({
    [css['c-switch']]: true,
    [css['c-switch--active']]: checked
  });
  return (
    <div className={classes}>
      <ReactSwitch
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={18}
        height={11}
        width={26}
        checked={checked}
        {...otherProps}
      />
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool
};

Switch.defaultProps = {
  checked: false
};

export default Switch;
