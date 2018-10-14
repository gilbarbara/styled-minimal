import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { EmbedStyles } from './utils/system';

export const StyledEmbed = styled.div`
  ${EmbedStyles.base};
`;

StyledEmbed.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.number,
};

StyledEmbed.defaultProps = {
  ratio: 9 / 16,
};

export default withComponent(StyledEmbed, 'Embed');
