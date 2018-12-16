import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, spacer, themeGet } from './utils/helpers';

import Box from './Box';
import Legend from './Legend';

const styles = (props: Object): string => {
  const { inline } = props;
  const {
    borderColor,
    borderRadius,
    padding,
    marginBottom,
  } = themeGet(props, 'fieldset');

  return css`
    border: 1px solid ${borderColor};
    border-radius: ${px(borderRadius)};
    margin-bottom: ${px(marginBottom)};
    padding: ${px(padding)};
    text-align:left;

    > *:not(legend) {
      ${inline ? 'display: inline-block;' : ''};
      
      + * {
        ${inline ? `margin-left: ${spacer(2)} ;` : ''};
      }
    }
  `;
};

export const Fieldset = styled(Box)`
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
  ...Box.propTypes,
};

Fieldset.defaultProps = {
  as: 'fieldset',
  inline: false,
};

export default Fieldset;
