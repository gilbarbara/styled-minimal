import React from 'react';
import PropTypes from 'prop-types';
import system from 'system-components';

import { base, systemGroups } from './utils/system';

export const StyledText = system(props => ({
  fontFamily: base.fontFamily(props),
  is: 'span',
}), ...systemGroups('text'));

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
