import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';

import Box from './Box';

const styles = (props: Object): string => {
  const { bordered } = props;
  const {
    borderColor,
    borderRadius,
    padding,
  } = themeGet(props, 'form');

  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''}
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    ${bordered ? `padding: ${px(padding)};` : ''}
    text-align:left;
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
  method: PropTypes.oneOf([
    'get',
    'post',
  ]),
  target: PropTypes.string,
  ...Box.propTypes,
};

Form.defaultProps = {
  as: 'form',
  bordered: false,
};

export default Form;
