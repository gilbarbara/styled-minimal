import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { sizeTypeFull, variantType } from './utils/propTypes';
import { AlertStyles } from './utils/system';

export const StyledAlert = styled.div.attrs({
  role: 'alert',
})`
  ${AlertStyles.base};
`;

StyledAlert.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  /** button size */
  size: sizeTypeFull,
  /** button variant */
  variant: variantType,
};

StyledAlert.defaultProps = {
  outline: false,
  size: 'md',
  variant: 'primary',
};

export default withComponent(StyledAlert, 'Alert');
