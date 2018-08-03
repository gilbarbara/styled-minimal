import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getProp } from '../utils/helpers';
import { colors } from '../utils/styles';

const Wrapper = styled.button.attrs({
  type: 'button',
})`
  align-items: center;
  border-radius: ${getProp('buttonRadius', 'size', 'md')};
  background-color: ${getProp('palette', 'variant', 'primary')};
  border: 0;
  color: ${({ variant }) => (variant === 'default' ? colors.black : colors.white)};
  display: flex;
  font-size: ${getProp('fontSizes', 'size', 'md')};
  font-weight: 700;
  padding: ${getProp('buttonPadding', 'size', 'md')};
  text-transform: uppercase;
  ${({ loading }) => (loading ? getProp('buttonLoader') : '')}
  
  [class^=i-] {
    margin-right: 1rem;
  }
`;

const Button = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
};

export default Button;
