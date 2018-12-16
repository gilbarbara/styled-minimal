import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { formPseudo, sizesPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { size, valid } = props;
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    color,
    fontSize,
    lineHeightTextarea,
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
    border: ${borderWidth ? `${borderWidth} solid ${thisColor}` : ''};
    border-radius: ${px(borderRadius)};
    color: ${color};
    display: block;
    font-family: inherit;
    font-size: ${px(fontSize[size])};
    line-height: ${lineHeightTextarea};
    margin: 0;
    padding: ${px(padding[size])};
    width: 100%;
  `;
};

export const Textarea = styled(Box).attrs(({ id, name }) => ({
  id: id || name,
}))`
  ${styles};
  ${formPseudo};
`;

Textarea.propTypes = {
  as: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
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
  ...Box.propTypes,
};

Textarea.defaultProps = {
  as: 'textarea',
  rows: 3,
  size: 'md',
};

export default Textarea;
