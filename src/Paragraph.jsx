import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { base, systemGroups } from './utils/system';

export const StyledParagraph = styled(system(props => ({
  fontFamily: base.fontFamily(props),
  is: 'p',
  margin: 0,
}), ...systemGroups('text')))`
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
