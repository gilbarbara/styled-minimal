import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  minHeight,
  space,
  textAlign,
  width,
} from 'styled-system';

const StyledFlex = styled.div`
  ${alignContent};
  ${alignItems};
  display: flex;
  ${display};
  ${flex};
  ${flexDirection};
  ${flexWrap};
  ${height};
  ${justifyContent};
  ${minHeight};
  ${space};
  ${textAlign};
  width: 100%;
  ${width};
`;

const Flex = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
