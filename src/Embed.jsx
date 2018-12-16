import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const StyledEmbed = styled(Box)`
  overflow: hidden;
  position: relative;
  width: 100%;
  
  & > iframe {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Embed = ({ children, ...props }) => (
  <StyledEmbed dangerouslySetInnerHTML={{ __html: children }} {...props} />
);

Embed.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.number,
  ...Box.propTypes,
};

Embed.defaultProps = {
  ratio: 9 / 16,
};

export default Embed;
