import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getProp } from '../utils/helpers';
import { buttonPadding, buttonRadius, buttonLoader, colors, fontSizes, palette } from '../utils/styles';

const Wrapper = styled.div`
  background-color: ${getProp('palette', 'variant') || palette.primary};
`;

const Alert = ({ children, handleClickClose, id, icon, variant }) => {
  const output = {};

  switch (variant) {
    case 'success': {
      output.icon = icon || 'i-check-circle';
      break;
    }
    case 'error': {
      output.icon = icon || 'i-times-circle';
      break;
    }
    case 'warning': {
      output.icon = icon || 'i-exclamation-circle';
      break;
    }
    case 'info': {
      output.icon = icon || 'i-question-circle';
      break;
    }
    case 'black': {
      output.icon = icon || 'i-bell-o';
      break;
    }
    default: {
      output.icon = icon || 'i-dot-circle-o';
    }
  }

  if (handleClickClose) {
    output.button = (
      <button
        className="app__alert__close"
        data-id={id}
        onClick={handleClickClose}
        type="button"
      >
        <i className="i-times" />
      </button>
    );
  }

  return (
    <Wrapper variant={variant}>
      <div className="app__alert__icon">
        <i className={output.icon} />
      </div>
      <div className="app__alert__content">{children}</div>
      {output.button}
    </Wrapper>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  handleClickClose: PropTypes.func,
  icon: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
};

export default Alert;
