import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { minHeight, space } from 'styled-system';

export const StyledScreen = styled.div`
  ${minHeight};
  ${space};
`;

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
