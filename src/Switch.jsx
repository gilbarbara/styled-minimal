import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, px, themeGet } from './utils/helpers';
import { sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { size } = props;
  const sizes = themeGet(props, 'switchSizes');

  return css`
    cursor: pointer;
    height: ${px(sizes[size].height)};
    position: relative;
    user-select: none;
    vertical-align: middle;
    width: ${px(sizes[size].width)};
  `;
};

const stylesTrack = (props: Object): string => {
  const { size, status } = props;
  const sizes = themeGet(props, 'switchSizes');
  const themeColor = getColor(props);

  return css`
    background-color: ${status ? themeColor : '#ccc'};
    border-radius: ${px(sizes[size].borderRadius)};
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  `;
};

const stylesButton = (props: Object): string => {
  const { size, status } = props;
  const sizes = themeGet(props, 'switchSizes');

  return css`
    background-color: #fff;
    border-radius: 50%;
    bottom: ${px(sizes[size].space)};
    left: ${status ? '50%' : px(sizes[size].space)};
    position: absolute;
    top: ${px(sizes[size].space)};
    transition: left 0.1s ease;
    width: ${px(sizes[size].height - sizes[size].space * 2)};
  `;
};

const StyledInput = styled.input`
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledTrack = styled.span`
  ${stylesTrack};
`;

const StyledButton = styled.span`
  ${stylesButton};
`;

export const StyledSwitch = styled(Box)`
  ${styles};
`;

class Switch extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: props.value,
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    size: sizesAllPropTypes,
    value: PropTypes.bool,
    variant: variantPropTypes,
    ...Box.propTypes,
  };

  static defaultProps = {
    onChange: () => {},
    size: 'md',
    value: false,
    variant: 'primary',
  };

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (prevProps.value !== value) {
      this.update(value);
    }
  }

  update = value => {
    this.setState({ status: value });
  };

  handleClick = () => {
    const { status } = this.state;
    const { onChange } = this.props;

    this.setState({
      status: !status,
    });

    onChange(!status);
  };

  render() {
    const { name, ...rest } = this.props;
    const { status } = this.state;

    return (
      <StyledSwitch status={status} {...rest} onClick={this.handleClick}>
        <StyledInput type="hidden" name={name} value={status} />
        <StyledTrack status={status} {...rest} />
        <StyledButton status={status} {...rest} />
      </StyledSwitch>
    );
  }
}

export default Switch;
