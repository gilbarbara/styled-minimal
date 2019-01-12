import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px, spacer } from './utils/helpers';

import Box from './Box';
import Legend from './Legend';

const styles = (props: Object): string => {
  const { borderRadius: br, inline, mb, ml, padding: pd } = props;
  const { borderColor, borderRadius, padding, marginBottom } = getTheme(props, 'fieldset');

  return css`
    border: 1px solid ${borderColor};
    border-radius: ${px(isDefined(br) ? px(br) : borderRadius)};
    margin-bottom: ${px(isDefined(mb) ? mb : marginBottom)};
    padding: ${px(isDefined(pd) ? pd : padding)};
    text-align: left;

    > *:not(legend) {
      ${inline ? 'display: inline-block;' : ''};

      + * {
        ${inline ? `margin-left: ${isDefined(ml) ? px(ml) : spacer(2)} ;` : ''};
      }
    }
  `;
};

const Fieldset = styled(Box)`
  ${styles};

  ${Legend} {
    margin: 0;
  }
`;

Fieldset.displayName = 'Fieldset';

Fieldset.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  ...Box.basePropTypes,
};

Fieldset.defaultProps = {
  as: 'fieldset',
  inline: false,
};

export default Fieldset;
