import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display, borders, space, fontFamily, fontSize, fontWeight } from 'styled-system';

export const StyledParagraph = styled.p`
  ${borders};
  ${display};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${space};
  margin: 0;
  
  & + & {
    margin-top: 16px;
  }
`;

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;