import React from 'react';
import PropTypes from 'prop-types';
import system from 'system-components';
import { systemGroups } from './utils/system';

export const StyledBox = system({
  width: '100%',
}, ...systemGroups('flex', 'layout', 'positioning', 'ui'));

const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
