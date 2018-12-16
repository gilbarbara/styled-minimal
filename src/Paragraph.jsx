import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacer } from './utils/helpers';

import Box from './Box';

export const Paragraph = styled(Box)`
  margin: 0;

  & + & {
    margin-top: ${spacer(2)};
  }
`;

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

Paragraph.defaultProps = {
  as: 'p',
};

export default Paragraph;
