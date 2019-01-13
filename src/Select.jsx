import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getDimmerColor, getTheme, isDefined, lighten, px } from './utils/helpers';
import { formPseudo, sizesPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const select = (props: Object): string => {
  const {
    bg,
    bordered,
    borderColor: bc,
    borderRadius: br,
    borderWidth: bw,
    color: cl,
    fontFamily,
    fontSize: fz,
    height: h,
    lineHeight: lh,
    multiple,
    padding: pd,
    sizing,
    valid,
    width,
  } = props;
  const {
    backgroundColor,
    color,
    borderColor,
    borderRadius,
    borderWidth,
    fontSize,
    height,
    lineHeight,
    padding,
    validation,
  } = getTheme(props, 'select');

  const currentBgColor = bg || backgroundColor;
  let currentBorderColor = bc || borderColor;

  if (valid) {
    currentBorderColor = validation.valid;
  } else if (valid === false) {
    currentBorderColor = validation.invalid;
  }

  const multipleCheckedColor = bordered ? currentBorderColor : currentBgColor;

  return css`
    background-color: ${currentBgColor};
    border: ${bordered ? `${px(bw || borderWidth)} solid ${currentBorderColor}` : 0};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    color: ${cl || color};
    display: block;
    ${!multiple ? `height: ${px(h || height[sizing])}` : ''};
    font-family: ${fontFamily || 'inherit'};
    font-size: ${px(fz || fontSize[sizing])};
    line-height: ${lh || lineHeight};
    ${!multiple ? `padding: ${px(isDefined(pd) ? pd : padding[sizing])};` : ''};
    white-space: nowrap;
    width: ${width || '100%'};

    > option {
      background-color: ${bordered ? currentBgColor : getDimmerColor(currentBgColor)};
      color: ${cl || color};
      font-size: ${px(fz || fontSize[sizing])};
      line-height: ${lh || lineHeight};
      padding: ${px(isDefined(pd) ? pd : padding[sizing])};
    }

    &[multiple] {
      background-color: ${bordered ? currentBgColor : lighten(0.4, currentBgColor)};

      option:checked {
        background: ${`${multipleCheckedColor} linear-gradient(0deg, ${multipleCheckedColor} 0%, ${multipleCheckedColor} 100%)`};
        font-weight: bold;
      }
    }
  `;
};

const Select = styled(Box)`
  ${select};
  ${formPseudo};
`;

Select.displayName = 'Select';

Select.propTypes = {
  as: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.number,
  sizing: sizesPropTypes,
  valid: PropTypes.bool,
  ...basePropTypes,
};

Select.defaultProps = {
  as: 'select',
  bordered: true,
  sizing: 'md',
};

export default Select;
