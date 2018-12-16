import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { formPseudo, inputTextTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { size, type, valid } = props;
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
  } = themeGet(props, 'input');
  let thisColor = borderColor;

  if (valid) {
    thisColor = validation.valid;
  }
  else if (valid === false) {
    thisColor = validation.invalid;
  }

  return css`
    background-color: ${backgroundColor};
    border: ${borderWidth ? `${px(borderWidth)} solid ${thisColor}` : ''};
    border-radius: ${px(borderRadius)};
    color: ${color};
    display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
    font-family: inherit;
    font-size: ${px(fontSize[size])};
    ${inputTextTypes.includes(type) ? `height: ${px(height[size])}` : ''};
    line-height: ${lineHeight};
    ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${px(inlineMargin)} 0 0` : ''};
    padding: ${inputTextTypes.includes(type) ? px(padding[size]) : 0};
    ${!['checkbox', 'radio', 'color'].includes(type) ? 'width: 100%;' : ''};
    
    &[type=file] {
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
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  ...Box.propTypes,
};

Input.defaultProps = {
  as: 'input',
  size: 'md',
  type: 'text',
  value: undefined,
};

export default Input;
