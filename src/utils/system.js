import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { css } from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  backgroundImage,
  borders,
  borderRadius,
  bottom,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  position,
  ratio,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';

import { getColor, getProp, getYiq } from './helpers';
import { placeholder } from './mixins';
import { inputTextTypes } from './options';

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
    const themeColor = getColor(props);

    const backgroundColor = outline ? colors.white : themeColor;
    const borderColor = disabled ? lighten(0.3, themeColor) : themeColor;
    let selectedColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    selectedColor = outline ? themeColor : selectedColor;

    return css`
      background-color: ${disabled && !outline ? lighten(0.2, backgroundColor) : backgroundColor};
      border: 1px solid ${outline ? borderColor : backgroundColor};
      color: ${disabled ? lighten(0.3, selectedColor) : selectedColor};
    `;
  },
  fontSize: props => getProp('fontSizes', { key: 'size', base: 'md' })(props),
  lineHeight: props => getProp('lineHeight')(props),
};

export const AlertStyles = {
  base(props) {
    const { size } = props;
    const {
      borderRadius: radii,
      maxWidth: alertMaxWidth,
      padding,
    } = getProp('alert')(props);

    return css`
      ${base.variant};
      border-radius: ${radii};
      font-size: ${base.fontSize};
      line-height: ${base.lineHeight};
      max-width: ${alertMaxWidth};
      padding: ${padding[size]};
      width: 100%;
      ${borderRadius};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${maxWidth};
      ${space};
      
      a {
        ${base.color};
      }
    `;
  },
};

export const BadgeStyles = {
  base(props) {
    const {
      borderRadius: radii,
      fontSize: badgeFontSize,
      fontWeight: badgeFontWeight,
      padding,
    } = getProp('badge')(props);
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);

    return css`
      ${base.variant};
      border-radius: ${radii};
      display: inline-block;
      font-size: ${badgeFontSize};
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      font-weight: ${badgeFontWeight};
      line-height: ${base.lineHeight};
      padding: ${padding};
      vertical-align: baseline;
      ${borderRadius};
      ${fontWeight};
    `;
  },
};

export const BoxStyles = {
  base() {
    return css`
      width: 100%;
      ${alignContent};
      ${alignItems};
      ${alignSelf};
      ${backgroundImage};
      ${borders};
      ${bottom};
      ${color};
      ${display};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
      ${flex};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${height};
      ${justifyContent};
      ${left};
      ${maxHeight};
      ${maxWidth};
      ${minHeight};
      ${minWidth};
      ${order};
      ${position};
      ${right};
      ${space};
      ${textAlign};
      ${top};
      ${width};
      ${zIndex};
    `;
  },
};

export const ButtonStyles = {
  base(props) {
    const { animate, outline, size } = props;
    const {
      borderRadius: radii,
      lineHeight: buttonLineHeight,
      loader,
      padding,
    } = getProp('button')(props);
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);

    return css`
      align-items: center;
      ${base.variant};
      border-radius: ${radii[size]};
      box-shadow: none;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      justify-content: center;
      line-height: ${buttonLineHeight};
      padding: ${padding[size]};
      text-decoration: none;
      width: ${({ block }) => (block ? '100%' : 'auto')}
      ${animate ? loader(outline ? '#ccc' : '#fff') : ''};
      ${borders};
      ${borderRadius};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
    `;
  },
  outlineColor(props) {
    return css`outline-color: ${getColor(props)};`;
  },
};

export const CodeStyles = {
  base() {
    return css`
      font-family: "SF Mono", "Roboto Mono", Menlo, monospace;
      ${color};
      ${borders};
      ${display};
      ${fontSize};
      ${space};
    `;
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
      ${alignContent};
      ${alignItems};
      ${alignSelf};
      ${display};
      ${display};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
      ${flex};
      ${flex};
      ${height};
      ${justifyContent};
      ${minHeight};
      ${minWidth};
      ${order};
      ${space};
      ${width};
    `;
  },
};

export const EmbedStyles = {
  base() {
    return css`
      overflow: hidden;
      position: relative;
      width: 100%;
      ${borders};
      ${borderRadius};
      ${display};
      ${ratio};
      ${space};
      ${width};
      
      & > iframe {
        border: 0;
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `;
  },
};

export const FlexStyles = {
  base() {
    return css`
      display: flex;
      width: 100%;
      ${alignContent};
      ${alignItems};
      ${alignSelf};
      ${bottom};
      ${display};
      ${display};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
      ${flex};
      ${flex};
      ${height};
      ${justifyContent};
      ${left};
      ${minHeight};
      ${minWidth};
      ${order};
      ${position};
      ${right};
      ${space};
      ${top};
      ${width};
      ${zIndex};
    `;
  },
};

export const FormStyles = {
  fieldset(props) {
    const {
      backgroundColor: bgColor,
      borderColor,
      borderRadius: radii,
      padding,
      marginBottom,
    } = getProp('fieldset')(props);

    return css`
      background-color: ${bgColor};
      border: 1px solid ${borderColor};
      border-radius: ${radii};
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
      borderRadius: radii,
      padding,
    } = getProp('form')(props);

    return css`
      background-color: ${formBgColor};
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${radii};` : ''}
      ${bordered ? `padding: ${padding};` : ''}
      text-align:left;
    `;
  },
  group(props) {
    const { bordered } = props;
    const {
      backgroundColor: formGroupBgColor,
      borderColor,
      borderRadius: radii,
      marginBottom,
      padding,
    } = getProp('formGroup')(props);

    return css`
      background-color: ${formGroupBgColor};
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${radii};` : ''}
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
      borderRadius: radii,
      borderWidth,
      color: inputColor,
      fontSize: inputFontSize,
      height: inputHeight,
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
      border-radius: ${radii};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: inherit;
      font-size: ${inputFontSize[size]};
      ${inputTextTypes.includes(type) ? `height: ${inputHeight[size]}` : ''};
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
      font-family: inherit;
      ${inline ? `font-size: ${inlineFontSize}` : ''};
      line-height: ${base.lineHeight};
      ${!inline ? `margin-bottom: ${marginBottom}` : ''};
      white-space: nowrap;
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
    `;
  },
  legend(props) {
    const { color: legendColor, marginBottom } = getProp('legend')(props);

    return css`
      color: ${legendColor};
      display: block;
      font-family: inherit;
      line-height: ${base.lineHeight};
      margin-bottom: ${marginBottom};
      white-space: nowrap;
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
    `;
  },
  select(props) {
    const { multiple, sizing } = props;
    const {
      backgroundColor: bgColor,
      color: selectColor,
      borderColor,
      borderRadius: radii,
      fontSize: selectFontSize,
      height: selectHeight,
      lineHeight: selectLineHeight,
      padding,
    } = getProp('select')(props);

    return css`
      background-color: ${bgColor};
      border: 1px solid ${borderColor};
      border-radius: ${radii};
      color: ${selectColor};
      display: block;
      ${!multiple ? `height: ${selectHeight[sizing]}` : ''};
      font-family: inherit;
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
      borderRadius: radii,
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
      border-radius: ${radii};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: inherit;
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
    const headingSize = getProp('headingSizes', { key: ['size', 'as'], base: 'h1' })(props);

    return css`
      font-size: ${headingSize};
      font-family: inherit;
      font-weight: ${headingWeight};
      line-height: ${base.lineHeight};
      margin: 0 0 ${gutterBottom ? headingGutter : 0};
      ${borders};
      ${fontWeight};
      ${space};
      ${textAlign};
    `;
  },
};

export const ImageStyles = {
  base() {
    return css`
      height: auto;
      max-width: 100%;
      ${borders};
      ${borderRadius};
      ${display};
      ${height};
      ${maxHeight};
      ${maxWidth};
      ${minHeight};
      ${minWidth};
      ${space};
      ${width};
    `;
  },
};

export const LinkStyles = {
  base(props) {
    const palette = getProp('palette')(props);
    const grays = getProp('grays')(props);

    return css`
      color: ${palette.primary};
      ${color};
      ${borders};
      ${display};
      ${fontSize};
      ${fontWeight};
      ${space};
      
      &:visited {
        color: ${grays.gray50};
      }
    `;
  },
};

export const ListStyles = {
  base(props) {
    const { as, bordered, inline, styleType } = props;
    const {
      borderColor,
      borderRadius: radii,
    } = getProp('list')(props);

    return css`
      ${bordered ? `border: 1px solid ${borderColor};` : ''};
      ${bordered ? `border-radius: ${radii};` : ''};
      display: flex;
      flex-direction: ${inline ? 'row' : 'column'};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      margin: 0;
      ${as === 'ul' && styleType === 'none' ? 'padding: 0;' : ''};
      ${space};
      ${textAlign};
      ${as === 'ul' ? `list-style-type: ${styleType};` : ''};
    `;
  },
  item(props) {
    const { size } = props;
    const { padding } = getProp('list')(props);

    return css`
      padding: ${padding[size]};
    `;
  },
  itemSibling(props) {
    const { bordered } = props;
    const { borderColor } = getProp('list')(props);

    if (bordered) {
      return css`
        border-top: 1px solid ${borderColor};
      `;
    }

    return '';
  },
};

export const ParagraphStyles = {
  base() {
    return css`
      margin: 0;
      ${borders};
      ${display};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
    `;
  },
};

export const ScreenStyles = {
  base() {
    return css`
      ${minHeight};
      ${space};
    `;
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

export const TextStyles = {
  base() {
    return css`
      ${borders};
      ${display};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
    `;
  },
};
