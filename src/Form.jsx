import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';

import Box, { basePropTypes } from './Box';

const styles = props => {
  const { bordered, textAlign } = props;
  const { borderColor, borderRadius, padding } = getTheme(props, 'form');

  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''}
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    ${bordered ? `padding: ${px(padding)};` : ''}
    text-align: ${textAlign || 'left'};
  `;
};

const Form = styled(Box)`
  ${styles};
`;

Form.displayName = 'Form';

Form.propTypes = {
  action: PropTypes.string,
  as: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  enctype: PropTypes.string,
  method: PropTypes.oneOf(['get', 'post']),
  target: PropTypes.string,
  ...basePropTypes,
};

Form.defaultProps = {
  as: 'form',
  bordered: false,
};

export default Form;
