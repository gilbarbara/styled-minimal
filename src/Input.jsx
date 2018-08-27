import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

const StyledInput = styled.input`
  ${FormStyles.input};
  ${FormStyles.pseudo};
`;

const Input = ({ ...props }) => (
  //eslint-disable-next-line react/prop-types, react/destructuring-assignment
  <StyledInput id={props.id || props.name} {...props} />
);

Input.propTypes = {
  accept: PropTypes.string,
  autocomplete: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tabindex: PropTypes.number,
  type: PropTypes.oneOf([
    'checkbox',
    'color',
    'date',
    'email',
    'file',
    'hidden',
    'number',
    'password',
    'radio',
    'search',
    'tel',
    'text',
  ]),
  valid: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Input.defaultProps = {
  size: 'md',
  type: 'text',
  value: undefined,
};

export default Input;
