import React from 'react';
import PropTypes from 'prop-types';
import system from 'system-components';

export const StyledScreen = system('minHeight', 'space');

const Screen = ({ children, ...props }) => (
  <StyledScreen {...props}>{children}</StyledScreen>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
};

Screen.defaultProps = {
  minHeight: '100vh',
};

export default Screen;
