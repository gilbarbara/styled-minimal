import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { formPseudo, inputTextTypes, outlines } from './utils/system';

import Box from './Box';

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
    height: h,
    lineHeight: lh,
    padding: pd,
    size,
    type,
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
    height,
    inlineMargin,
    lineHeight,
    padding,
    validation,
  } = getTheme(props, 'input');

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
    display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
    font-family: ${fontFamily || 'inherit'};
    font-size: ${px(fz || fontSize[size])};
    ${inputTextTypes.includes(type) ? `height: ${h || px(height[size])}` : ''};
    line-height: ${lh || lineHeight};
    ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${px(inlineMargin)} 0 0` : ''};
    padding: ${inputTextTypes.includes(type) ? px(isDefined(pd) ? pd : padding[size]) : 0};
    ${!['checkbox', 'radio', 'color'].includes(type) ? `width: ${width || '100%'}` : ''};

    &[type='file'] {
      font-size: ${px(fontSize[size] - 1)};
      padding: ${px(padding[size] - 1)};
    }
  `;
};

const Input = styled(Box).attrs(({ id, name }) => ({
  id: id || name,
}))`
  ${styles};
  ${formPseudo};
`;

Input.propTypes = {
  accept: PropTypes.string,
  as: PropTypes.string,
  autoComplete: PropTypes.string,
  bordered: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tabindex: PropTypes.number,
  type: PropTypes.oneOf([
    'checkbox',
    'color',
    'date',
    'email',
    'file',
    'hidden',
    'number',
    'password',
    'radio',
    'search',
    'tel',
    'text',
  ]),
  valid: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...Box.basePropTypes,
  ...outlines.propTypes,
};

Input.defaultProps = {
  as: 'input',
  bordered: true,
  size: 'md',
  type: 'text',
  value: undefined,
};

export default Input;
