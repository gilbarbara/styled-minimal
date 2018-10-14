import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { ParagraphStyles } from './utils/system';

export const StyledParagraph = styled.p`
  ${ParagraphStyles.base};

  & + & {
    margin-top: 16px;
  }
`;

StyledParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(StyledParagraph, 'Paragraph');
