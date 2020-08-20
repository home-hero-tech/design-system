import React from 'react';
import PropTypes from 'prop-types';

const _contentStyle = {
  background: '#8dcaff'
};

const Content = ({ children, ...otherProps }) => (
  <div style={_contentStyle} {...otherProps}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired
};

Content.defaultProps = {};

export default Content;
