import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { FormStyles } from './utils/system';

export const StyledForm = styled.form`
  ${FormStyles.form};
`;

StyledForm.propTypes = {
  action: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  enctype: PropTypes.string,
  method: PropTypes.oneOf([
    'get',
    'post',
  ]),
  target: PropTypes.string,
};

StyledForm.defaultProps = {
  bordered: false,
};

export default withTheme(StyledForm, 'Form');
