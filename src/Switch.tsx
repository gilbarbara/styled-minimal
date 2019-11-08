import * as React from 'react';
import styled, { css } from 'styled-components';

import { getColor, getTheme, isBoolean, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';
import { Label } from './Label';

import { SwitchProps } from './types';

export interface SwitchPropsWithRef extends SwitchProps {
  innerRef?: React.Ref<HTMLInputElement>;
}

interface InnerProps extends Omit<SwitchProps, 'name'> {
  status: boolean;
}

const StyledInput = styled('input')`
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledTrack = styled('span')<InnerProps>(props => {
  const { size, status } = props;
  const sizes = getTheme(props, 'switchSizes');
  const color = status ? getColor(props) : '#ccc';

  return css`
    background-color: ${color};
    border-radius: ${px(sizes[size!].borderRadius)};
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  `;
});

const StyledButton = styled('span')<InnerProps>(props => {
  const { disabled, size, status } = props;
  const sizes = getTheme(props, 'switchSizes');
  const currentSize = sizes[size!];

  return css`
    background-color: #fff;
    border-radius: 50%;
    bottom: ${px(currentSize.space)};
    left: ${status ? '50%' : px(currentSize.space)};
    opacity: ${disabled ? 0.7 : 1};
    position: absolute;
    top: ${px(currentSize.space)};
    transition: left 0.1s ease;
    width: ${px(currentSize.height - currentSize.space * 2)};
  `;
});

export const StyledSwitch = styled('div')<InnerProps>(
  props => {
    const { children, disabled, size } = props;
    const sizes = getTheme(props, 'switchSizes');
    const currentSize = sizes[size!];

    return css`
      ${baseStyles};
      cursor: ${disabled ? 'default' : 'pointer'};
      height: ${px(currentSize.height)};
      margin-right: ${children ? '8px' : 0};
      opacity: ${disabled ? 0.8 : 1};
      position: relative;
      user-select: none;
      vertical-align: middle;
      width: ${px(currentSize.width)};
    `;
  },
  sx,
  system,
);

class SwitchClass extends React.PureComponent<SwitchPropsWithRef, { status: boolean }> {
  constructor(props: SwitchProps) {
    super(props);

    this.state = {
      status: isBoolean(props.checked) ? props.checked : props.defaultChecked!,
    };
  }

  static defaultProps = {
    defaultChecked: false,
    disabled: false,
    size: 'md',
    variant: 'primary',
  };

  componentDidUpdate(prevProps: SwitchProps) {
    const { checked } = this.props;

    if (isBoolean(checked) && prevProps.checked !== checked) {
      this.update(checked);
    }
  }

  update = (status: boolean) => {
    this.setState({ status });
  };

  handleClick = () => {
    const { status } = this.state;
    const { checked, disabled, onChange } = this.props;

    if (isBoolean(checked) || disabled) {
      return;
    }

    this.update(!status);

    /* istanbul ignore else */
    if (onChange) {
      onChange(status ? 'off' : 'on');
    }
  };

  render() {
    const {
      checked,
      disabled,
      children,
      innerRef,
      name,
      onChange,
      size,
      variant,
      ...rest
    } = this.props;
    const { status } = this.state;

    const component = (
      <StyledSwitch
        disabled={disabled}
        size={size}
        status={status}
        role="switch"
        aria-checked={status}
        {...rest}
        onClick={!children ? this.handleClick : undefined}
      >
        <StyledInput
          disabled={disabled}
          name={name}
          ref={innerRef}
          type="hidden"
          value={status ? 'on' : 'off'}
        />
        <StyledTrack size={size} status={status} variant={variant} />
        <StyledButton disabled={disabled} size={size} status={status} variant={variant} />
      </StyledSwitch>
    );

    if (children) {
      return (
        <Label
          alignItems="center"
          cursor={disabled ? 'default' : 'pointer'}
          onClick={this.handleClick}
        >
          {component}
          {children}
        </Label>
      );
    }

    return component;
  }
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchPropsWithRef>((props, ref) => (
  <SwitchClass innerRef={ref} {...props} />
));
