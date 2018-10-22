import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { EmbedStyles } from './utils/system';

export const StyledEmbed = styled.div`
  ${EmbedStyles.base};
`;

const Embed = ({ children, ...props }) => (
  <StyledEmbed dangerouslySetInnerHTML={{ __html: children }} {...props} />
);

Embed.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.number,
};

Embed.defaultProps = {
  ratio: 9 / 16,
};

Embed.styled = StyledEmbed;

export default Embed;
