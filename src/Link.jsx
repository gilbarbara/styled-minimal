import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { themeGet } from './utils/helpers';

import Box from './Box';

const styles = (props: Object): string => {
  const palette = themeGet(props, 'palette');
  const grays = themeGet(props, 'grays');

  return css`
    color: ${palette.primary};

    &:visited {
      color: ${grays.gray50};
    }
  `;
};

const Link = styled(Box)`
  ${styles};
`;

Link.displayName = 'Link';

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  ...Box.propTypes,
};

Link.defaultProps = {
  as: 'a',
};

export default Link;
