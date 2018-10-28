import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ScreenStyles } from './utils/system';

export const StyledScreen = styled.div`
  ${ScreenStyles.base};
`;

const Screen = ({ children, ...rest }) => (
  <StyledScreen {...rest}>{children}</StyledScreen>
);

Screen.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
};

Screen.defaultProps = {
  minHeight: '100vh',
};

export default Screen;
