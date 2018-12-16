import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { formPseudo, sizesPropTypes } from './utils/system';

import Box from './Box';
import { px, themeGet } from './utils/helpers';

const select = (props: Object): string => {
  const { multiple, sizing } = props;
  const {
    backgroundColor,
    color,
    borderColor,
    borderRadius,
    fontSize,
    height,
    lineHeight,
    padding,
  } = themeGet(props, 'select');

  return css`
    background-color: ${backgroundColor};
    border: 1px solid ${borderColor};
    border-radius: ${px(borderRadius)};
    color: ${color};
    display: block;
    ${!multiple ? `height: ${px(height[sizing])}` : ''};
    font-family: inherit;
    font-size: ${px(fontSize[sizing])};
    line-height: ${lineHeight};
    ${!multiple ? `padding: ${px(padding[sizing])};` : ''};
    white-space: nowrap;
    width: 100%;
    
    > option {
      background-color: ${backgroundColor};
      font-size: ${px(fontSize[sizing])};
      line-height: ${lineHeight};
      padding: ${px(padding[sizing])};
    }
    
    &[multiple]:focus option:checked {
      background: black linear-gradient(0deg, black 0%, black 100%);
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
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.number,
  sizing: sizesPropTypes,
  ...Box.propTypes,
};

Select.defaultProps = {
  as: 'select',
  sizing: 'md',
};

export default Select;
