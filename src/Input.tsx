import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  getColor,
  getDarkColor,
  getDimmerColor,
  getTextColor,
  getTheme,
  px,
} from './utils/helpers';
import {
  baseStyles,
  pseudoStyles,
  inputTextTypes,
  sx,
  system,
  variantStyles,
} from './utils/system';

import { CheckboxProps, InputProps, RadioProps } from './types';

interface InnerProps extends CheckboxProps, RadioProps {
  category?: 'checkbox' | 'radio';
}

export const StyledInput = styled('input')<any>(
  props => {
    const { size = 'md', type = 'text', valid } = props;
    const {
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      color,
      fontSize,
      height,
      lineHeight,
      padding,
      validation,
    } = getTheme(props, 'input');

    let currentBorderColor = borderColor;

    if (valid) {
      currentBorderColor = validation.valid;
    } else if (valid === false) {
      currentBorderColor = validation.invalid;
    }

    return css`
      ${baseStyles};
      background-color: ${backgroundColor};
      border: ${px(borderWidth)} solid ${currentBorderColor};
      border-radius: ${px(borderRadius)};
      color: ${color};
      display: block;
      font-family: inherit;
      font-size: ${px(fontSize[size])};
      ${inputTextTypes.includes(type) ? `height: ${px(height[size])}` : ''};
      line-height: ${lineHeight};
      padding: ${inputTextTypes.includes(type) ? px(padding[size]) : 0};
      ${!['color'].includes(type) ? 'width: 100%;' : ''};

      &[type='file'] {
        font-size: ${px(fontSize[size] - 1)};
        padding: ${px(padding[size] - 1)};
      }
    `;
  },
  pseudoStyles,
  sx,
  system,
);

const StyledCheckboxRadioInput = styled('input')`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledText = styled('span')<InnerProps>(props => {
  const { size, category = 'checkbox' } = props;
  const { sizes } = getTheme(props, category);

  return css`
    font-size: ${px(sizes[size!])};
  `;
});

const StyledElement = styled('span')<InnerProps>(
  props => {
    const { dark, invert, size, category = 'checkbox' } = props;
    const { backgroundColor, borderColor, borderRadius, sizes } = getTheme(props, category);
    const color = getColor(props);
    const currentSize = sizes[size!];
    let after;
    let accentColor = dark ? getDarkColor(props) : getTextColor(props);

    if (invert && !dark) {
      accentColor = color;
    }

    if (category === 'checkbox') {
      after = css`
        border-bottom: 2px solid ${accentColor};
        border-left: 2px solid ${accentColor};
        height: 6px;
        transform: rotate(-45deg) translateY(-100%);
        width: 9px;
      `;
    } else {
      after = css`
        background-color: ${accentColor};
        border-radius: 50%;
        height: 6px;
        transform: translate(-50%, -50%);
        width: 6px;
      `;
    }

    return css`
      ${baseStyles};
      border-radius: ${px(borderRadius)};
      ${variantStyles};
      display: inline-flex;
      height: ${px(currentSize)};
      margin-right: 6px;
      position: relative;
      transition: background-color 0.2s, border-color 0.2s;
      width: ${px(currentSize)};

      &:after {
        content: '';
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        ${after};
      }

      input:checked ~ & {
        &:after {
          display: inline-block;
        }
      }

      input:disabled ~ & {
        opacity: 0.6;
      }

      input:not(:checked) ~ & {
        background-color: ${backgroundColor};
        border-color: ${borderColor};
      }

      input:not(:checked):disabled ~ & {
        background-color: ${borderColor};
      }
    `;
  },
  sx,
  system,
);

const StyledLabel = styled('label')<InnerProps>(props => {
  const { disabled, inline, category = 'checkbox' } = props;
  const color = getDimmerColor(getColor(props));
  const { borderColor } = getTheme(props, category);

  return css`
    align-items: center;
    cursor: ${disabled ? 'default' : 'pointer'};
    display: ${inline ? 'inline-flex' : 'flex'};
    margin-bottom: 8px;
    position: relative;
    margin-right: ${inline && '12px'};

    &:focus,
    &:hover {
      ${StyledCheckboxRadioInput} {
        &:not(:checked) ~ ${StyledElement} {
          background-color: ${borderColor};
        }

        &:not(:disabled):checked ~ ${StyledElement} {
          background-color: ${color};
          border-color: ${color};
        }
      }
    }
  `;
});

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    defaultChecked,
    checked,
    children,
    disabled,
    inline,
    invert,
    label,
    onChange,
    size,
    theme,
    value,
    variant,
    ...rest
  } = props;

  return (
    <StyledLabel disabled={disabled} inline={inline} theme={theme} variant={variant}>
      <StyledCheckboxRadioInput
        checked={checked}
        aria-checked={checked || defaultChecked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        ref={ref}
        role="checkbox"
        type="checkbox"
        value={value}
      />
      <StyledElement
        category="checkbox"
        invert={invert}
        size={size}
        theme={theme}
        variant={variant}
        {...rest}
      />
      <StyledText category="checkbox" size={size}>
        {children || label}
      </StyledText>
    </StyledLabel>
  );
});

Checkbox.defaultProps = {
  dark: false,
  inline: false,
  invert: false,
  size: 'md',
  variant: 'primary',
};

/**
 * Use the RadioGroup component instead of this.
 * RadioGroup accepts an `options` prop that render this component in a group and is responsible for managing state and interactions.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      defaultChecked,
      checked,
      children,
      disabled,
      id,
      inline,
      invert,
      label,
      name,
      onChange,
      size,
      theme,
      value,
      variant,
      ...rest
    },
    ref,
  ) => (
    <StyledLabel
      disabled={disabled}
      inline={inline}
      theme={theme}
      category="radio"
      variant={variant}
    >
      <StyledCheckboxRadioInput
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        ref={ref}
        type="radio"
        value={value}
      />
      <StyledElement
        invert={invert}
        role="radio"
        aria-checked={!!(checked || defaultChecked)}
        size={size}
        theme={theme}
        variant={variant}
        {...rest}
        category="radio"
      />
      <StyledText size={size} category="radio">
        {children || label}
      </StyledText>
    </StyledLabel>
  ),
);

Radio.defaultProps = {
  dark: false,
  inline: false,
  invert: false,
  size: 'md',
  variant: 'primary',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

Input.defaultProps = {
  size: 'md',
  type: 'text',
};
