import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

export const StyledForm = styled.form`
  ${FormStyles.form};
`;

const Form = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
);

Form.propTypes = {
  action: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  enctype: PropTypes.string,
  inline: PropTypes.bool,
  method: PropTypes.oneOf([
    'get',
    'post',
  ]),
  target: PropTypes.string,
};

Form.defaultProps = {
  bordered: false,
  inline: false,
};

export default Form;
