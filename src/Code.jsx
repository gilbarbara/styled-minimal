import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';

import Box, { basePropTypes } from './Box';

const Code = styled(Box)(props => {
  const { bg, border: bd, borderRadius: br, fontFamily: ff, padding: pd } = props;
  const { backgroundColor, border, borderRadius, fontFamily, padding } = getTheme(props, 'code');

  return css`
    background-color: ${bg || backgroundColor};
    border: ${bd || border};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    font-family: ${ff || fontFamily || ff};
    padding: ${px(isDefined(pd) ? pd : padding)};
  `;
});

Code.displayName = 'Code';

Code.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...basePropTypes,
};

Code.defaultProps = {
  as: 'code',
};

export default Code;
