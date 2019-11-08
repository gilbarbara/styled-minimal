import * as React from 'react';
import styled, { css } from 'styled-components';

import { getTheme, px } from './utils/helpers';
import { baseStyles, sx, system } from './utils/system';

import { FormGroupProps } from './types';

import { Flex, StyledFlex } from './Flex';
import { Label } from './Label';

const margin = (props: any) => {
  const { inlineMargin } = getTheme(props, 'formGroup');

  return px(inlineMargin);
};

export const StyledFormGroup = styled('div')<Partial<FormGroupProps>>(
  props => {
    const { frame, inline } = props;
    const { borderColor, borderRadius, marginBottom, padding } = getTheme(props, 'formGroup');

    return css`
      ${baseStyles};
      ${frame ? `border: 1px solid ${borderColor};` : ''}
      ${frame ? `border-radius: ${px(borderRadius)};` : ''}
      margin-bottom: ${px(marginBottom)};
      ${frame ? `padding: ${px(padding)};` : ''};
      text-align: left;
      
      ${() => {
        if (inline) return '';

        return `
        label + label {
          margin-top: 6px;
         }
      `;
      }};
  
      ${StyledFlex} {
        input,
        label,
        legend {
          margin-bottom: 0;
          margin-right: ${margin};
        }
    
        small {
          margin-top: 0;
        }
      }
    `;
  },
  sx,
  system,
);

const HelpText = styled('small')<Partial<FormGroupProps>>(props => {
  const { helpColor, helpMarginTop } = getTheme(props, 'formGroup');

  return css`
    color: ${helpColor};
    display: block;
    font-size: 85%;
    line-height: 1.3;
    margin-top: ${px(helpMarginTop)};
  `;
});

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { children, helpText, inline, label, ...rest } = props;
  const helpComponent = helpText && <HelpText>{helpText}</HelpText>;
  let content = (
    <React.Fragment>
      {!!label && <Label>{label}</Label>}
      {children}
      {helpComponent}
    </React.Fragment>
  );

  if (inline) {
    content = <Flex alignItems="center">{content}</Flex>;
  }

  return (
    <StyledFormGroup ref={ref} inline={inline} {...rest}>
      {content}
    </StyledFormGroup>
  );
});

FormGroup.defaultProps = {
  frame: false,
  inline: false,
};
