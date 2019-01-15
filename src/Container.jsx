import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px, responsive, spacer } from './utils/helpers';

import Box, { basePropTypes } from './Box';

const styles = props => {
  const { ml, mr, pb, pl, pr, pt } = props;
  const container = getTheme(props, 'container');

  const vertical = ({ verticalPadding }) => {
    /* istanbul ignore else */
    if (!verticalPadding) return '';

    const grid = responsive({
      md: `
          padding-bottom: ${isDefined(pb) ? px(pb) : spacer(4)(props)};
          padding-top: ${isDefined(pt) ? px(pt) : spacer(4)(props)};
        `,
      lg: `
          padding-bottom: ${isDefined(pb) ? px(pb) : spacer(5)(props)};
          padding-top: ${isDefined(pt) ? px(pt) : spacer(5)(props)};
        `,
    });

    return css`
      padding-bottom: ${isDefined(pb) ? px(pb) : spacer(3)};
      padding-top: ${isDefined(pt) ? px(pt) : spacer(3)};

      ${grid};
    `;
  };

  const grid = responsive({
    md: `
        padding-left: ${isDefined(pl) ? px(pl) : spacer(4)(props)};
        padding-right: ${isDefined(pr) ? px(pr) : spacer(4)(props)};
      `,
  });

  return css`
    margin-left: ${isDefined(ml) ? px(ml) : 'auto'};
    margin-right: ${isDefined(mr) ? px(mr) : 'auto'};
    padding-left: ${isDefined(pl) ? px(pl) : spacer(3)};
    padding-right: ${isDefined(pr) ? px(pr) : spacer(3)};
    max-width: ${container.maxWidth ? px(container.maxWidth) : 'none'};
    position: relative;
    width: 100%;
    ${container.layout[props.layout] || ''}
    ${vertical};

    ${grid};
  `;
};

const Container = styled(Box)`
  ${styles};
`;

Container.displayName = 'Container';

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['flex', 'fullScreen']),
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
  ...basePropTypes,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
