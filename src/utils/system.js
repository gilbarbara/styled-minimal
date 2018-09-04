import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { css } from 'styled-components';
import {
  border,
  fontFamily,
  fontSize,
  fontWeight,
  space,
  textAlign,
} from 'styled-system';

import { getColor, getProp, getYiq } from './helpers';
import { placeholder } from './mixins';
import { inputTextTypes } from './options';

export const systemGroups = (...opts) => {
  const groups = {
    flex: [
      'alignContent',
      'alignItems',
      'display',
      'flex',
      'flexDirection',
      'flexWrap',
      'justifyContent',
    ],
    layout: [
      'alignSelf',
      'display',
      'flex',
      'flexBasis',
      'height',
      'minHeight',
      'minWidth',
      'order',
      'space',
      'width',
    ],
    positioning: [
      'bottom',
      'left',
      'position',
      'right',
      'top',
      'zIndex',
    ],
    text: [
      'borders',
      'display',
      'fontFamily',
      'fontSize',
      'fontWeight',
      'space',
    ],
    ui: [
      'backgroundImage',
      'bgColor',
      'borders',
      'color',
      'fontFamily',
      'fontSize',
      'fontWeight',
      'textAlign',
    ],
  };

  return opts
    .filter(d => !!groups[d])
    .map(d => groups[d])
    .reduce((acc, data) => {
      data.forEach(d => {
        if (!acc.includes(d)) {
          acc.push(d);
        }
      });

      return acc;
    }, [])
    .sort((a, b) => {
      const left = a.toUpperCase();
      const right = b.toUpperCase();

      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }

      return 0;
    });
};

export const base = {
  color: props => {
    const { disabled, outline } = props;
    const colors = getProp('colors')(props);
    const selectedColor = getColor(props);

    let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
    baseColor = outline ? selectedColor : baseColor;

    return css`color: ${disabled ? lighten(0.3, baseColor) : baseColor};`;
  },
  variant(props) {
    const { disabled, outline } = props;
    const colors = getProp('colors')(props);
    const selectedColor = getColor(props);
    const backgroundColor = outline ? colors.white : getColor(props);
    const borderColor = disabled ? lighten(0.3, selectedColor) : selectedColor;
    let color = getYiq(selectedColor) > 180 ? colors.black : colors.white;
    color = outline ? selectedColor : color;

    return css`
      background-color: ${disabled && !outline ? lighten(0.2, backgroundColor) : backgroundColor};
      border: ${outline ? `1px solid ${borderColor}` : 0};
      color: ${disabled ? lighten(0.3, color) : color};
    `;
  },
  fontFamily: props => getProp('fontFamily')(props),
  fontSize: props => getProp('fontSizes', { key: 'size', base: 'md' })(props),
  fontWeight: props => getProp('fontWeights', { key: 'weight', base: 'normal' })(props),
  lineHeight: props => getProp('lineHeight')(props),
};

export const AlertStyles = {
  base(props) {
    const { size } = props;
    const { borderRadius, maxWidth, padding } = getProp('alert')(props);

    return css`
      ${base.variant};
      border-radius: ${borderRadius};
      font-family: ${base.fontFamily};
      font-size: ${base.fontSize};
      line-height: ${base.lineHeight};
      max-width: ${maxWidth};
      padding: ${padding[size]};
      width: 100%;
      
      a {
        ${base.color};
      }
    `;
  },
};

export const BadgeStyles = {
  base(props) {
    const {
      borderRadius,
      fontSize: badgeFontSize,
      fontWeight: badgeFontWeight,
      padding,
    } = getProp('badge')(props);
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);

    return css`
      align-items: center;
      ${base.variant};
      border-radius: ${borderRadius};
      display: inline-flex;
      font-size: ${badgeFontSize};
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      font-weight: ${badgeFontWeight};
      line-height: ${base.lineHeight};
      padding: ${padding};
      vertical-align: baseline;
    `;
  },
};

export const ButtonStyles = {
  base(props) {
    const { animate, outline, size } = props;
    const {
      borderRadius,
      lineHeight: buttonLineHeight,
      loader,
      padding,
    } = getProp('button')(props);
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);

    return css`
      align-items: center;
      ${base.variant};
      border-radius: ${borderRadius[size]};
      box-shadow: none;
      cursor: pointer;
      display: inline-flex;
      font-family: ${base.fontFamily};
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      font-weight: ${base.fontWeight};
      justify-content: center;
      line-height: ${buttonLineHeight};
      padding: ${padding[size]};
      text-decoration: none;
      width: ${({ block }) => (block ? '100%' : 'auto')}
      ${animate ? loader(outline ? '#ccc' : '#fff') : ''};
    `;
  },
  outlineColor(props) {
    return css`outline-color: ${getColor(props)};`;
  },
};

export const ContainerStyles = {
  base(props) {
    const containerMaxWidth = getProp('containerMaxWidth')(props);

    return css`
      margin-left: auto;
      margin-right: auto;
      max-width: ${containerMaxWidth};
      position: relative;
      width: 100%;
    `;
  },
};

export const FormStyles = {
  fieldset(props) {
    const {
      backgroundColor: bgColor,
      borderColor,
      borderRadius,
      padding,
      marginBottom,
    } = getProp('fieldset')(props);

    return css`
      background-color: ${bgColor};
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius};
      margin-bottom: ${marginBottom};
      padding: ${padding};
      text-align:left;
    `;
  },
  form(props) {
    const { bordered } = props;
    const {
      backgroundColor: formBgColor,
      borderColor,
      borderRadius,
      padding,
    } = getProp('form')(props);

    return css`
      background-color: ${formBgColor};
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${borderRadius};` : ''}
      ${bordered ? `padding: ${padding};` : ''}
      text-align:left;
    `;
  },
  group(props) {
    const { bordered } = props;
    const {
      backgroundColor: formGroupBgColor,
      borderColor,
      borderRadius,
      marginBottom,
      padding,
    } = getProp('formGroup')(props);

    return css`
      background-color: ${formGroupBgColor};
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${borderRadius};` : ''}
      margin-bottom: ${marginBottom};
      ${bordered ? `padding: ${padding};` : ''};
      text-align: left;
    `;
  },
  input(props) {
    const { size, type, valid } = props;
    const {
      backgroundColor: inputBgColor,
      borderColor,
      borderRadius,
      borderWidth,
      color: inputColor,
      fontSize: inputFontSize,
      height,
      inlineMargin,
      lineHeight: inputLineHeight,
      padding,
      validation,
    } = getProp('input')(props);
    let thisColor = borderColor;

    if (valid) {
      thisColor = validation.valid;
    }
    else if (valid === false) {
      thisColor = validation.invalid;
    }

    return css`
      background-color: ${inputBgColor};
      border: ${borderWidth ? `${borderWidth} solid ${thisColor}` : ''};
      border-radius: ${borderRadius};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: ${base.fontFamily};
      font-size: ${inputFontSize[size]};
      ${inputTextTypes.includes(type) ? `height: ${height[size]}` : ''};
      line-height: ${inputLineHeight};
      ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${inlineMargin} 0 0` : ''};
      padding: ${inputTextTypes.includes(type) ? padding[size] : 0};
      ${!['checkbox', 'radio', 'color'].includes(type) ? 'width: 100%;' : ''};
    `;
  },
  label(props) {
    const { inline } = props;
    const { color: labelColor, inlineFontSize, marginBottom } = getProp('label')(props);

    return css`
      color: ${labelColor};
      display: block;
      font-family: ${base.fontFamily};
      ${inline ? `font-size: ${inlineFontSize}` : ''};
      line-height: ${base.lineHeight};
      ${!inline ? `margin-bottom: ${marginBottom}` : ''};
      white-space: nowrap;
    `;
  },
  legend(props) {
    const { color: legendColor, marginBottom } = getProp('legend')(props);

    return css`
      color: ${legendColor};
      display: block;
      font-family: ${base.fontFamily};
      line-height: ${base.lineHeight};
      margin-bottom: ${marginBottom};
      white-space: nowrap;
    `;
  },
  select(props) {
    const { multiple, sizing } = props;
    const {
      backgroundColor: bgColor,
      color: selectColor,
      borderColor,
      borderRadius,
      fontSize: selectFontSize,
      height,
      lineHeight: selectLineHeight,
      padding,
    } = getProp('select')(props);

    return css`
      background-color: ${bgColor};
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius};
      color: ${selectColor};
      display: block;
      ${!multiple ? `height: ${height[sizing]}` : ''};
      font-family: ${base.fontFamily};
      font-size: ${selectFontSize[sizing]};
      line-height: ${selectLineHeight};
      ${!multiple ? `padding: ${padding[sizing]};` : ''};
      white-space: nowrap;
      width: 100%;
      
      > option {
        background-color: ${bgColor};
        font-size: ${selectFontSize[sizing]};
        line-height: ${selectLineHeight};
        padding: ${padding[sizing]};
      }
      
      &[multiple]:focus option:checked {
        background: black linear-gradient(0deg, black 0%, black 100%);
      }
    `;
  },
  textarea(props) {
    const { size, type, valid } = props;
    const {
      backgroundColor: inputBgColor,
      borderColor,
      borderRadius,
      borderWidth,
      color: inputColor,
      fontSize: inputFontSize,
      lineHeightTextarea,
      padding,
      validation,
    } = getProp('input')(props);
    let thisColor = borderColor;

    if (valid) {
      thisColor = validation.valid;
    }
    else if (valid === false) {
      thisColor = validation.invalid;
    }

    return css`
      background-color: ${inputBgColor};
      border: ${borderWidth ? `${borderWidth} solid ${thisColor}` : ''};
      border-radius: ${borderRadius};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: ${base.fontFamily};
      font-size: ${inputFontSize[size]};
      line-height: ${lineHeightTextarea};
      margin: 0;
      padding: ${padding[size]};
      width: 100%;
    `;
  },
  // helpers
  helpBlock(props) {
    const { helpColor, helpMarginTop } = getProp('formGroup')(props);

    return css`
      color: ${helpColor};
      display: block;
      font-family: ${base.fontFamily};
      font-size: 85%;
      line-height: 1.3;
      margin-top: ${helpMarginTop};
    `;
  },
  inlineMargin(props) {
    const { inlineMargin } = getProp('formGroup')(props);

    return css`margin-right: ${inlineMargin};`;
  },
  pseudo(props) {
    const { multiple } = props;
    const {
      backgroundColor: inputBgColor,
      color: inputColor,
      focusColor,
      requiredColor,
    } = getProp('input')(props);
    const inputOnly = typeof multiple === 'undefined'
      ? `
    ${placeholder(`color: ${lighten(0.5, inputColor)};`)};
    
    &:read-only {
      background-color: ${darken(0.02, inputBgColor)};
      color: ${lighten(0.3, inputColor)};
    }`
      : '';

    return css`
      ${inputOnly};
      
      &:disabled {
        background-color: ${darken(0.05, inputBgColor)};
        color: ${lighten(0.2, inputColor)};
      }
      
      &:focus {
        outline-color: ${focusColor};
      }
      
      &:required:not(:valid) {
        border-color: ${requiredColor};
        ${placeholder(`color: ${requiredColor};`)};
      }
    `;
  },
};

export const HeadingStyles = {
  base(props) {
    const { gutterBottom } = props;
    const headingWeight = getProp('headingWeight')(props);
    const headingGutter = getProp('headingGutter')(props);
    const headingSize = getProp('headingSizes', { key: ['size', 'is'], base: 'h1' })(props);

    return css`
      font-size: ${headingSize};
      ${border};
      font-family: ${base.fontFamily};
      font-weight: ${headingWeight};
      ${fontWeight};
      line-height: ${base.lineHeight};
      margin: 0 0 ${gutterBottom ? headingGutter : 0};
      ${space};
      ${textAlign};
    `;
  },
};

export const ListStyles = {
  base(props) {
    const { bordered, inline, is, styleType } = props;
    const { borderColor, borderRadius } = getProp('list')(props);

    return css`
      ${bordered ? `border: 1px solid ${borderColor};` : ''};
      ${bordered ? `border-radius: ${borderRadius};` : ''};
      display: flex;
      flex-direction: ${inline ? 'row' : 'column'};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      margin: 0;
      ${is === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
      ${space};
      ${textAlign};
      ${is === 'ul' ? `list-style-type: ${styleType};` : ''};
    `;
  },
  itemBorder(props) {
    const { bordered } = props;
    const { borderColor } = getProp('list')(props);

    if (bordered) {
      return css`border-top: 1px solid ${borderColor};`;
    }

    return '';
  },
  itemPadding(props) {
    const { size } = props;
    const { padding } = getProp('list')(props);

    return css`padding: ${padding[size]};`;
  },
};

export const TableStyles = {
  base(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors, colors } = getProp('table')(props);

    return css`
      background-color: ${colors[inverted ? 'secondary' : 'primary']};
      ${bordered && !borderless ? `border: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};` : ''};
      border-collapse: collapse;
      color: ${colors[inverted ? 'primary' : 'secondary']};
      font-family: ${base.fontFamily};
      width: 100%;
    `;
  },
  caption(props) {
    const { captionColor, captionPadding } = getProp('table')(props);

    return css`
      caption {
        caption-side: bottom;
        color: ${captionColor};
        font-size: 90%;
        padding-bottom: ${captionPadding};
        padding-top: ${captionPadding};
        text-align: left;
      }
    `;
  },
  cellBorder(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors } = getProp('table')(props);

    if (borderless) {
      return '';
    }

    return css`${bordered ? 'border' : 'border-top'}: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};`;
  },
  color(props) {
    const { inverted } = props;
    const { colors } = getProp('table')(props);

    return css`color: ${colors[inverted ? 'primary' : 'secondary']};`;
  },
  headBackgroundColor(props) {
    const { head } = props;
    const { headColors } = getProp('table')(props);

    return css`background-color: ${headColors[head] || 'transparent'};`;
  },
  headCellBorder(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors } = getProp('table')(props);
    const colorProp = borderColors[inverted ? 'secondary' : 'primary'];

    if (borderless) {
      return '';
    }

    return css`
      ${bordered ? `border: 1px solid ${colorProp}` : `border-bottom: 2px solid ${colorProp}`};
      ${bordered && 'border-bottom-width: 2px'};
    `;
  },
  headColor(props) {
    const { head } = props;
    const { colors } = getProp('table')(props);

    if (head) {
      return css`color: ${colors[head === 'dark' ? 'primary' : 'secondary']};`;
    }

    return '';
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('table')(props);

    return css`padding: ${padding[size]};`;
  },
  striped(props) {
    const { inverted, striped } = props;
    const { stripedColors } = getProp('table')(props);

    if (striped) {
      return css`background-color: ${stripedColors[inverted ? 'secondary' : 'primary']};`;
    }

    return '';
  },
};
