import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

export const Code = styled(Box)`
  background-color: #e8eded;
  border: 1px solid #d0dada;
  border-radius: 2px;
  font-family: "SF Mono", "Roboto Mono", Menlo, monospace;
  padding: 10px;
`;

Code.displayName = 'Code';

Code.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

Code.defaultProps = {
  as: 'code',
};

export default Code;
