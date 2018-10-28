import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ParagraphStyles } from './utils/system';

export const StyledParagraph = styled.p`
  ${ParagraphStyles.base};

  & + & {
    margin-top: 16px;
  }
`;

const Paragraph = ({ children, ...rest }) => (
  <StyledParagraph {...rest}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
