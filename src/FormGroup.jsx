import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';

import Box from './Box';
import Flex from './Flex';

const styles = (props: Object): string => {
  const { bordered } = props;
  const {
    borderColor,
    borderRadius,
    marginBottom,
    padding,
  } = themeGet(props, 'formGroup');

  return css`
    ${bordered ? `border: 1px solid ${borderColor};` : ''}
    ${bordered ? `border-radius: ${px(borderRadius)};` : ''}
    margin-bottom: ${px(marginBottom)};
    ${bordered ? `padding: ${px(padding)};` : ''};
    text-align: left;
  `;
};

const margin = (props: Object): string => {
  const { inlineMargin } = themeGet(props, 'formGroup');

  return px(inlineMargin);
};

export const StyledFormGroup = styled(Box)`
  ${styles};
  
  ${({ inline }) => {
    if (inline) return '';

    return `
      label + label {
        margin-top: 6px;
       }
    `;
  }};
  
  ${Flex} {
    label,
    legend {
      margin-bottom: 0;
      margin-right: ${margin};
    }
    
    input {
      flex: 1;
      width: auto;
    }
    
    small {
      margin-left: ${margin};
      margin-top: 0;
    }
  }
`;

const helpBlock = (props: Object): string => {
  const { helpColor, helpMarginTop } = themeGet(props, 'formGroup');

  return css`
      color: ${helpColor};
      display: block;
      font-size: 85%;
      line-height: 1.3;
      margin-top: ${px(helpMarginTop)};
    `;
};

const HelpText = styled.small`
  ${helpBlock};
`;

const FormGroup = ({ children, helpText, inline, ...props }) => {
  const helpComponent = helpText && <HelpText>{helpText}</HelpText>;
  let content = (
    <React.Fragment>
      {children}
      {helpComponent}
    </React.Fragment>
  );

  if (inline) {
    content = (
      <Flex alignItems="center">
        {content}
      </Flex>
    );
  }

  return (
    <StyledFormGroup inline={inline} {...props}>
      {content}
    </StyledFormGroup>
  );
};

FormGroup.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  helpText: PropTypes.string,
  inline: PropTypes.bool,
  ...Box.propTypes,
};

FormGroup.defaultProps = {
  bordered: false,
  inline: false,
};

export default FormGroup;
