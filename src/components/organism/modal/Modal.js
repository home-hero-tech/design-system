import React from 'react';
import PropTypes from 'prop-types';

import EmptyModal from '../empty-modal/EmptyModal';

const Modal = ({
  // EmptyModal props
  open,
  left,
  right,
  onRequestClose,
  contentLabel,

  children,
  ...otherProps
}) => {
  return (
    <EmptyModal
      open={open}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      left={left}
      right={right}
      {...otherProps}
    >
      {children}
    </EmptyModal>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  contentLabel: PropTypes.string.isRequired,
  left: PropTypes.bool,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  right: PropTypes.bool
};

Modal.defaultProps = {
  left: false,
  right: true,
  onRequestClose: f => f
};

Modal.displayName = 'Modal';

export default Modal;
