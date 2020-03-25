import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../loader/Loader';

import css from './Button.module.scss';

const Button = ({
  onClick,
  submit,
  shape,
  size,
  container,
  type,
  children,
  disabled,
  loading
}) => {
  const btnType = submit ? 'submit' : 'button';

  const classes = classNames({
    [css['c-btn']]: true,
    [css.ripple]: true,
    [css[`c-btn--${type}`]]: true,
    [css[`c-btn--${shape}`]]: true,
    [css[`c-btn--${container}`]]: true,
    [css[`c-btn--size-${size}`]]: true
  });

  return (
    <button
      disabled={disabled}
      type={btnType}
      className={classes}
      onClick={onClick}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'success'
  ]),
  submit: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4]),
  container: PropTypes.oneOf(['default', 'outlined', 'text']),
  shape: PropTypes.oneOf(['squared', 'rounded']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: null,
  submit: false,
  type: 'default',
  container: 'default',
  shape: 'rounded',
  size: 2,
  loading: false,
  disabled: false
};

export default Button;
