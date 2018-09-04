import React from 'react';
import PropTypes from 'prop-types';
import system from 'system-components';
import { systemGroups } from './utils/system';

export const StyledFlex = system({
  display: 'flex',
  width: '100%',
}, ...systemGroups('flex', 'layout', 'positioning'));

const Flex = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
