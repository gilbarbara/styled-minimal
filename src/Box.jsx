import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignSelf,
  bgColor,
  borders,
  display,
  flex,
  flexBasis,
  fontFamily,
  fontSize,
  fontWeight,
  order,
  space,
  textAlign,
  width,
} from 'styled-system';

export const StyledBox = styled.div`
  ${alignSelf};
  ${bgColor}
  ${borders};
  ${display};
  ${flex};
  ${flexBasis};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
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
