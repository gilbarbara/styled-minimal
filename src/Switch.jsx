import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { sizeTypeFull, variantType } from './utils/propTypes';
import { SwitchStyles } from './utils/system';

export const StyledSwitch = styled.div`
  ${SwitchStyles.base};
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
    size: sizeTypeFull,
    value: PropTypes.bool,
    variant: variantType,
  };

  static defaultProps = {
    onChange: () => {},
    size: 'md',
    value: false,
    variant: 'primary',
  };

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;

    if (value !== nextProps.value) {
      this.setState({ status: nextProps.value });
    }
  }

  handleClick = () => {
    const { status } = this.state;
    const { onChange } = this.props;

    this.setState({
      status: !status,
    });

    onChange(!status);
  };

  render() {
    const { name, ...props } = this.props;
    const { status } = this.state;

    return (
      <StyledSwitch status={status} {...props} onClick={this.handleClick}>
        <input
          type="hidden"
          name={name}
          value={status}
        />
        <span className="__track" />
        <span className="__button" />
      </StyledSwitch>
    );
  }
}

export default withComponent(Switch, 'Switch');
