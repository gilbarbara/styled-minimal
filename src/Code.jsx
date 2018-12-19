import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { isDefined, px, themeGet } from './utils/helpers';

import Box from './Box';

const Code = styled(Box)(props => {
  const { bg, border: bd, borderRadius: br, fontFamily: ff, padding: pd } = props;
  const { backgroundColor, border, borderRadius, fontFamily, padding } = themeGet(props, 'code');

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
  ...Box.propTypes,
};

Code.defaultProps = {
  as: 'code',
};

export default Code;
