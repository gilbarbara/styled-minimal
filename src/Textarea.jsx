import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { formPseudo, outlines, sizesPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const styles = (props: Object): string => {
  const {
    bg,
    bordered,
    borderColor: bc,
    borderRadius: br,
    borderWidth: bw,
    color: cl,
    fontFamily,
    fontSize: fz,
    lineHeight: lh,
    padding: pd,
    size,
    valid,
    width,
  } = props;
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    color,
    fontSize,
    lineHeight,
    padding,
    validation,
  } = getTheme(props, 'textarea');

  let currentBorderColor = bc || borderColor;
  if (valid) {
    currentBorderColor = validation.valid;
  } else if (valid === false) {
    currentBorderColor = validation.invalid;
  }

  return css`
    background-color: ${bg || backgroundColor};
    border: ${bordered ? `${px(bw || borderWidth)} solid ${currentBorderColor}` : 0};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    color: ${cl || color};
    display: block;
    font-family: ${fontFamily || 'inherit'};
    font-size: ${px(fz || fontSize[size])};
    line-height: ${lh || lineHeight};
    margin: 0;
    padding: ${px(isDefined(pd) ? pd : padding[size])};
    width: ${width || '100%'};
  `;
};

const Textarea = styled(Box).attrs(({ id, name }) => ({
  id: id || name,
}))`
  ${styles};
  ${formPseudo};
`;

Textarea.propTypes = {
  as: PropTypes.string,
  bordered: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  size: sizesPropTypes,
  tabindex: PropTypes.number,
  valid: PropTypes.bool,
  value: PropTypes.string,
  wrap: PropTypes.oneOf(['soft', 'hard']),
  ...basePropTypes,
  ...outlines.propTypes,
};

Textarea.defaultProps = {
  as: 'textarea',
  bordered: true,
  rows: 3,
  size: 'md',
};

export default Textarea;
