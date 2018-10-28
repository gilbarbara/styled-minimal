import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

import Flex, { StyledFlex } from './Flex';

export const StyledFormGroup = styled.div`
  ${FormStyles.group};
  
  ${({ inline }) => {
    if (inline) return '';

    return `
      label + label {
        margin-top: 6px;
       }
    `;
  }};
  
  ${StyledFlex} {
    label,
    legend {
      margin-bottom: 0;
      margin-right: ${FormStyles.inlineMargin};
    }
    
    input {
      flex: 1;
      width: auto;
    }
    
    small {
      margin-left: ${FormStyles.inlineMargin};
      margin-top: 0;
    }
  }
`;

const StyledHelpText = styled.small`
  ${FormStyles.helpBlock};
`;

const FormGroup = ({ children, helpText, inline, ...props }) => {
  const helpComponent = helpText && <StyledHelpText>{helpText}</StyledHelpText>;
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
};

FormGroup.defaultProps = {
  bordered: false,
  inline: false,
};

export default FormGroup;
