import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

const StyledTextarea = styled.textarea`
  ${FormStyles.textarea};
  ${FormStyles.pseudo};
`;

const Textarea = ({ ...props }) => (
  <StyledTextarea {...props} />
);

Textarea.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tabindex: PropTypes.number,
  valid: PropTypes.bool,
  value: PropTypes.string,
  wrap: PropTypes.oneOf(['soft', 'hard']),
};

Textarea.defaultProps = {
  rows: 3,
  size: 'md',
};

export default Textarea;
