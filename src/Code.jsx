import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacer } from './utils/helpers';

import Box from './Box';

const Code = styled(Box)`
  background-color: #e8eded;
  border: 1px solid #d0dada;
  border-radius: 2px;
  font-family: "SF Mono", "Roboto Mono", Menlo, monospace;
  padding: ${spacer(2)};
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
