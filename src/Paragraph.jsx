import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { isDefined, spacer } from './utils/helpers';

import Box from './Box';

const Paragraph = styled(Box)(
  ({ mb, mt }) => css`
    margin-bottom: ${isDefined(mb) ? mb : 0};
    margin-top: ${isDefined(mt) ? mt : 0};

    & + & {
      margin-top: ${spacer(2)};
    }
  `,
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.basePropTypes,
};

Paragraph.defaultProps = {
  as: 'p',
};

export default Paragraph;
