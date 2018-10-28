import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ContainerStyles } from './utils/system';
import { textAlignType } from './utils/propTypes';

export const StyledContainer = styled.div`
  ${ContainerStyles.base};
`;

const Container = ({ children, ...rest }) => (
  <StyledContainer {...rest}>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['flex', 'fullScreen']),
  textAlign: textAlignType,
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
