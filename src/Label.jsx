import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { baseStyles } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { inline } = props;
  const {
    color: labelColor,
    fontWeight: labelFontWeight,
    inlineFontSize,
    marginBottom,
  } = themeGet(props, 'label');

  return css`
    align-items: center;
    color: ${labelColor};
    display: flex;
    font-family: inherit;
    font-weight: ${labelFontWeight};
    ${inline ? `font-size: ${px(inlineFontSize)}` : ''};
    line-height: ${baseStyles.lineHeight};
    ${!inline ? `margin-bottom: ${px(marginBottom)}` : ''};
    white-space: nowrap;
  `;
};

export const Label = styled(Box)`
  ${styles};
`;

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
