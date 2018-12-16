import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { baseStyles } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const {
    color: legendColor,
    fontWeight: legendFontWeight,
    marginBottom,
  } = themeGet(props, 'legend');

  return css`
    color: ${legendColor};
    display: block;
    font-family: inherit;
    font-weight: ${legendFontWeight};
    line-height: ${baseStyles.lineHeight};
    margin-bottom: ${px(marginBottom)};
    white-space: nowrap;
  `;
};

const Legend = styled(Box)`
  ${styles};
`;

Legend.displayName = 'Legend';

Legend.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

Legend.defaultProps = {
  as: 'legend',
};

export default Legend;
