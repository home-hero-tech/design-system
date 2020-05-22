import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import './Editor.scss';
import classNames from 'classnames';

const Editor = ({
  value,
  modules,
  fullHeight,
  onChange,
  toolbar,
  ...otherProps
}) => {
  const optionsToolbar = modules || {};

  const classes = classNames({
    'c-editor': true,
    'c-editor--full-height': fullHeight
  });

  return (
    <div className={classes}>
      <ReactQuill
        modules={!toolbar ? { toolbar: null } : { toolbar: optionsToolbar }}
        theme="snow"
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

Editor.propTypes = {
  value: PropTypes.string,
  toolbar: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  modules: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  fullHeight: PropTypes.bool
};

Editor.defaultProps = {
  value: '',
  toolbar: true,
  modules: null,
  fullHeight: false
};

export default Editor;
