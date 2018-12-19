import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, getDimmerColor } from './utils/helpers';
import { variantPropTypes } from './utils/system';

import Box from './Box';

const Link = styled(Box)(props => {
  const { color } = props;
  const currentColor = color || getColor(props);

  return css`
    color: ${currentColor};

    &:visited {
      color: ${getDimmerColor(currentColor)};
    }
  `;
});

Link.displayName = 'Link';

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: variantPropTypes,
  ...Box.propTypes,
};

Link.defaultProps = {
  as: 'a',
};

export default Link;
