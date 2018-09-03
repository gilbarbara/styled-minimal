import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  bottom,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  left,
  minHeight,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';

export const StyledFlex = styled.div`
  ${alignContent};
  ${alignItems};
  ${bottom};
  display: flex;
  ${display};
  ${flex};
  ${flexDirection};
  ${flexWrap};
  ${height};
  ${left};
  ${justifyContent};
  ${minHeight};
  ${position};
  ${right};
  ${space};
  ${textAlign};
  ${top};
  width: 100%;
  ${width};
  ${zIndex}
`;

const Flex = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
