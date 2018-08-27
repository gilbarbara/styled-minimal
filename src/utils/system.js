import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';

import { getColor, getProp, getYiq } from './helpers';
import { placeholder } from './mixins';
import { inputTextTypes } from './options';

export const backgroundColor = props => {
  const { disabled, outline } = props;
  const colors = getProp('colors')(props);
  const baseColor = outline ? colors.white : getColor(props);

  return `background-color: ${disabled && !outline ? lighten(0.2, baseColor) : baseColor};`;
};

export const border = props => {
  const { disabled, outline } = props;
  const selectedColor = getColor(props);
  const baseColor = disabled ? lighten(0.3, selectedColor) : selectedColor;

  return `border: ${outline ? `1px solid ${baseColor}` : 0};`;
};

export const color = props => {
  const { disabled, outline } = props;
  const colors = getProp('colors')(props);
  const selectedColor = getColor(props);

  let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
  baseColor = outline ? selectedColor : baseColor;

  return `color: ${disabled ? lighten(0.3, baseColor) : baseColor};`;
};

export const fontFamily = props => `font-family: ${getProp('fontFamily')(props)};`;
export const fontSize = props => `font-size: ${getProp('fontSizes', { key: 'size', base: 'md' })(props)};`;
export const fontWeight = props => `font-weight: ${getProp('fontWeights', { key: 'weight', base: 'normal' })(props)};`;
export const lineHeight = props => `line-height: ${getProp('lineHeight')(props)};`;

export const AlertStyles = {
  borderRadius(props) {
    const { borderRadius } = getProp('alert')(props);

    return `border-radius: ${borderRadius};`;
  },
  maxWidth(props) {
    const { maxWidth } = getProp('alert')(props);

    return `max-width: ${maxWidth};`;
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('alert')(props);

    return `padding: ${padding[size]};`;
  },
};

export const BadgeStyles = {
  borderRadius(props) {
    const { borderRadius } = getProp('badge')(props);
    return `border-radius: ${borderRadius};`;
  },
  fontSize(props) {
    const { fontSize: badgeFontSize } = getProp('badge')(props);
    return `font-size: ${badgeFontSize};`;
  },
  fontWeight(props) {
    const { fontWeight: badgeFontWeight } = getProp('badge')(props);
    return `font-weight: ${badgeFontWeight};`;
  },
  padding(props) {
    const { padding } = getProp('badge')(props);
    return `padding: ${padding};`;
  },
  size(props) {
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);
    return fontSizeProp ? `font-size: ${fontSizeProp}` : '';
  },
};

export const ButtonStyles = {
  animation(props) {
    const { animate, outline } = props;

    const { loader } = getProp('button')(props);
    const animationProp = animate && loader;

    return animationProp && animationProp(outline ? '#ccc' : '#fff');
  },
  borderRadius(props) {
    const { size } = props;
    const { borderRadius } = getProp('button')(props);
    return `border-radius: ${borderRadius[size]};`;
  },
  lineHeight(props) {
    const { lineHeight: buttonLineHeight } = getProp('button')(props);
    return `line-height: ${buttonLineHeight};`;
  },
  outlineColor(props) {
    return `outline-color: ${getColor(props)};`;
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('button')(props);

    return `padding: ${padding[size]};`;
  },
  size(props) {
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);
    return fontSizeProp ? `font-size: ${fontSizeProp}` : '';
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

    return `
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

    return `
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

    return `
      background-color: ${formGroupBgColor};
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${borderRadius};` : ''}
      margin-bottom: ${marginBottom};
      ${bordered ? `padding: ${padding};` : ''}
      text-align:left;
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

    return `
      background-color: ${inputBgColor};
      border: ${borderWidth ? `${borderWidth} solid ${thisColor}` : ''};
      border-radius: ${borderRadius};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      ${fontFamily(props)};
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

    return `
      color: ${labelColor};
      display: block;
      ${fontFamily(props)};
      ${inline ? `font-size: ${inlineFontSize}` : ''};
      ${lineHeight(props)};
      ${!inline ? `margin-bottom: ${marginBottom}` : ''};
      white-space: nowrap;
    `;
  },
  legend(props) {
    const { color: legendColor, marginBottom } = getProp('legend')(props);

    return `
      color: ${legendColor};
      display: block;
      ${fontFamily(props)};
      ${lineHeight(props)};
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

    return `
      background-color: ${bgColor};
      border: 1px solid ${borderColor};
      border-radius: ${borderRadius};
      color: ${selectColor};
      display: block;
      ${!multiple ? `height: ${height[sizing]}` : ''};
      ${fontFamily(props)};
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

    return `
      background-color: ${inputBgColor};
      border: ${borderWidth ? `${borderWidth} solid ${thisColor}` : ''};
      border-radius: ${borderRadius};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      ${fontFamily(props)};
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

    return `
      color: ${helpColor};
      display: block;
      ${fontFamily(props)};
      font-size: 85%;
      line-height: 1.3;
      margin-top: ${helpMarginTop};
    `;
  },
  inlineMargin(props) {
    const { inlineMargin } = getProp('formGroup')(props);

    return `margin-right: ${inlineMargin};`;
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

    return `
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

export const ListStyles = {
  border(props) {
    const { bordered } = props;
    const { borderColor } = getProp('list')(props);

    if (bordered) {
      return `border: 1px solid ${borderColor};`;
    }

    return '';
  },
  borderRadius(props) {
    const { bordered } = props;
    const { borderRadius } = getProp('list')(props);

    if (bordered) {
      return `border-radius: ${borderRadius};`;
    }

    return '';
  },
  display(props) {
    const { inline } = props;

    return `
      display: flex;
      flex-direction: ${inline ? 'row' : 'column'};
    `;
  },
  itemBorder(props) {
    const { bordered } = props;
    const { borderColor } = getProp('list')(props);

    if (bordered) {
      return `border-top: 1px solid ${borderColor};`;
    }

    return '';
  },
  itemPadding(props) {
    const { size } = props;
    const { padding } = getProp('list')(props);

    return `padding: ${padding[size]};`;
  },
  padding(props) {
    const { element, styleType } = props;

    if (element === 'ul' && styleType === 'none') {
      return 'padding: 0';
    }

    return '';
  },
  styleType(props) {
    const { element, styleType } = props;

    if (element === 'ol') return '';

    return `list-style-type: ${styleType};`;
  },
};

export const TableStyles = {
  backgroundColor(props) {
    const { inverted } = props;
    const { colors } = getProp('table')(props);

    return `background-color: ${colors[inverted ? 'secondary' : 'primary']};`;
  },
  border(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors } = getProp('table')(props);

    if (borderless) {
      return '';
    }

    return bordered ? `border: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};` : '';
  },
  caption(props) {
    const { captionColor, captionPadding } = getProp('table')(props);

    return `
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

    return `${bordered ? 'border' : 'border-top'}: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};`;
  },
  color(props) {
    const { inverted } = props;
    const { colors } = getProp('table')(props);

    return `color: ${colors[inverted ? 'primary' : 'secondary']};`;
  },
  headBackgroundColor(props) {
    const { head } = props;
    const { headColors } = getProp('table')(props);

    return `background-color: ${headColors[head] || 'transparent'};`;
  },
  headCellBorder(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors } = getProp('table')(props);
    const colorProp = borderColors[inverted ? 'secondary' : 'primary'];

    if (borderless) {
      return '';
    }

    return `
      ${bordered ? `border: 1px solid ${colorProp}` : `border-bottom: 2px solid ${colorProp}`};
      ${bordered && 'border-bottom-width: 2px'};
    `;
  },
  headColor(props) {
    const { head } = props;
    const { colors } = getProp('table')(props);

    if (head) {
      return `color: ${colors[head === 'dark' ? 'primary' : 'secondary']};`;
    }

    return '';
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('table')(props);

    return `padding: ${padding[size]};`;
  },
  striped(props) {
    const { inverted, striped } = props;
    const { stripedColors } = getProp('table')(props);

    if (striped) {
      return `background-color: ${stripedColors[inverted ? 'secondary' : 'primary']};`;
    }

    return '';
  },
};
