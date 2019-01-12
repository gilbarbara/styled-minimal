import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { color: cl, fontFamily, fontWeight: fw, lineHeight, mb } = props;
  const { color, fontWeight, marginBottom } = getTheme(props, 'legend');

  return css`
    color: ${cl || color};
    display: block;
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fw || fontWeight};
    line-height: ${lineHeight || baseStyles.lineHeight};
    margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
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
  ...Box.basePropTypes,
};

Legend.defaultProps = {
  as: 'legend',
};

export default Legend;
