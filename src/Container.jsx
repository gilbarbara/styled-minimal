import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, responsive, spacer, themeGet } from './utils/helpers';
import { textAlignPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const container = themeGet(props, 'container');

  const vertical = ({ verticalPadding }: Object): string => {
    /* istanbul ignore else */
    if (!verticalPadding) return '';

    const grid = responsive({
      md: `
          padding-bottom: ${spacer(4)(props)};
          padding-top: ${spacer(4)(props)};
        `,
      lg: `
          padding-bottom: ${spacer(5)(props)};
          padding-top: ${spacer(5)(props)};
        `,
    });

    return css`
      padding-bottom: ${spacer(3)};
      padding-top: ${spacer(3)};
      
      ${grid};
    `;
  };

  const grid = responsive({
    md: `
        padding-left: ${spacer(4)(props)};
        padding-right: ${spacer(4)(props)};
      `,
  });

  return css`
      margin-left: auto;
      margin-right: auto;
      padding-left: ${spacer(3)};
      padding-right: ${spacer(3)};
      max-width: ${container.maxWidth ? px(container.maxWidth) : 'none'};
      position: relative;
      width: 100%;
      ${container.layout[props.layout] || ''}
      ${vertical};
      
      ${grid};
    `;
};

export const Container = styled(Box)`
  ${styles};
`;

Container.displayName = 'Container';

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['flex', 'fullScreen']),
  textAlign: textAlignPropTypes,
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
  ...Box.propTypes,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
