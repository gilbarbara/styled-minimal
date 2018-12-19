import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { isDefined, px, themeGet } from './utils/helpers';
import { baseStyles } from './utils/system';

import Box from './Box';

const Label = styled(Box)(props => {
  const { color: cl, fontFamily, fontSize, fontWeight: fw, inline, lineHeight, mb } = props;
  const { color, fontWeight, inlineFontSize, marginBottom } = themeGet(props, 'label');

  return css`
    align-items: center;
    color: ${cl || color};
    display: flex;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    ${inline ? `font-size: ${px(fontSize || inlineFontSize)}` : ''};
    line-height: ${lineHeight || baseStyles.lineHeight};
    ${!inline ? `margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)}` : ''};
    white-space: nowrap;
  `;
});

Label.displayName = 'Label';

Label.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  ...Box.propTypes,
};

Label.defaultProps = {
  as: 'label',
};

export default Label;
