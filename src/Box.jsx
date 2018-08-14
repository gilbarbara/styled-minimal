import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignSelf,
  backgroundImage,
  bgColor,
  borders,
  color,
  display,
  flex,
  flexBasis,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  order,
  space,
  textAlign,
  width,
} from 'styled-system';

export const StyledBox = styled.div`
  ${alignSelf};
  ${backgroundImage};
  ${bgColor}
  ${borders};
  ${color};
  ${display};
  ${flex};
  ${flexBasis};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${height};
  ${order};
  ${space};
  ${textAlign};
  width: 100%;
  ${width}
`;

const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
