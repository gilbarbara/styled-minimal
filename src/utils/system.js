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

import { calcUnits, getColor, getTheme, getYiq, px, themeGet } from './helpers';
import { placeholder } from './mixins';
import { inputTextOptions } from './options';

const base = {
  color: props => {
    const { disabled, outline } = props;
    const colors = themeGet(props, 'colors');
    const selectedColor = getColor(props);

    let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
    baseColor = outline ? selectedColor : baseColor;

    return css`
      color: ${disabled ? lighten(0.3, baseColor) : baseColor};
    `;
  },
  variant(props) {
    const { disabled, outline } = props;
    const colors = themeGet(props, 'colors');
    const themeColor = getColor(props);

    let selectedColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    selectedColor = outline ? themeColor : selectedColor;
    let backgroundColor = outline ? colors.white : themeColor;
    backgroundColor = disabled && !outline ? lighten(0.2, backgroundColor) : backgroundColor;
    const borderColor = disabled ? lighten(0.2, themeColor) : themeColor;

    return css`
      background-color: ${backgroundColor};
      border: 1px solid ${borderColor};
      color: ${selectedColor};
    `;
  },
  fontSize: props => themeGet(props, 'componentSizes', { key: 'size', base: 'md' }),
  lineHeight: props => themeGet(props, 'lineHeight'),
};

export const AlertStyles = {
  base(props) {
    const { size } = props;
    const {
      borderRadius: radii,
      maxWidth: alertMaxWidth,
      padding,
    } = themeGet(props, 'alert');

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
    } = themeGet(props, 'badge');
    const fontSizeProp = themeGet(props, 'componentSizes', { key: 'size' });

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
      ${flex};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
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
    } = themeGet(props, 'button');
    const fontSizeProp = themeGet(props, 'componentSizes', { key: 'size' });

    return css`
      ${base.variant};
      align-items: center;
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
    return css`
      outline-color: ${getColor(props)};
    `;
  },
};

export const ButtonGroupStyles = {
  base() {
    return css`
      display: flex;
      ${space};

      > button {
        &:first-child {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }

        &:last-child {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
        
        &:not(:first-child):not(:last-child) {
          border-radius: 0;
        }

        + button {
          margin-left: -1px;
        }
      }
    `;
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
    const { container, grid, gutter } = getTheme(props);

    const vertical = ({ verticalPadding }) => {
      if (!verticalPadding) return '';

      return css`
          padding-bottom: ${px(gutter[2])};
          padding-top: ${px(gutter[2])};
  
          ${grid.md} {
            padding-bottom: ${px(gutter[3])};
            padding-top: ${px(gutter[3])};
          }
        `;
    };

    return css`
      margin-left: auto;
      margin-right: auto;
      padding-left: ${px(gutter[2])};
      padding-right: ${px(gutter[2])};
      max-width: ${container.maxWidth};
      position: relative;
      width: 100%;
      ${container.layout[props.layout] || ''}
      ${vertical};
      ${alignContent};
      ${alignItems};
      ${alignSelf};
      ${display};
      ${flex};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
      ${height};
      ${justifyContent};
      ${maxWidth};
      ${minHeight};
      ${minWidth};
      ${order};
      ${space};
      ${textAlign}
      ${width};
      
      ${grid.md} {
        padding-left: ${px(gutter[3])};
        padding-right: ${px(gutter[3])};
      }
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
      ${flex};
      ${flexBasis};
      ${flexDirection};
      ${flexWrap};
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
    } = themeGet(props, 'fieldset');

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
    } = themeGet(props, 'form');

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
    } = themeGet(props, 'formGroup');

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
    } = themeGet(props, 'input');
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
      ${inputTextOptions.includes(type) ? `height: ${inputHeight[size]}` : ''};
      line-height: ${inputLineHeight};
      ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${inlineMargin} 0 0` : ''};
      padding: ${inputTextOptions.includes(type) ? padding[size] : 0};
      ${!['checkbox', 'radio', 'color'].includes(type) ? 'width: 100%;' : ''};
    `;
  },
  label(props) {
    const { inline } = props;
    const {
      color: labelColor,
      fontWeight: labelFontWeight,
      inlineFontSize,
      marginBottom,
    } = themeGet(props, 'label');

    return css`
      color: ${labelColor};
      display: block;
      font-family: inherit;
      font-weight: ${labelFontWeight};
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
    const {
      color: legendColor,
      fontWeight: legendFontWeight,
      marginBottom,
    } = themeGet(props, 'legend');

    return css`
      color: ${legendColor};
      display: block;
      font-family: inherit;
      font-weight: ${legendFontWeight};
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
    } = themeGet(props, 'select');

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
    } = themeGet(props, 'input');
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
    const { helpColor, helpMarginTop } = themeGet(props, 'formGroup');

    return css`
      color: ${helpColor};
      display: block;
      font-size: 85%;
      line-height: 1.3;
      margin-top: ${helpMarginTop};
    `;
  },
  inlineMargin(props) {
    const { inlineMargin } = themeGet(props, 'formGroup');

    return css`margin-right: ${inlineMargin};`;
  },
  pseudo(props) {
    const { multiple } = props;
    const {
      backgroundColor: inputBgColor,
      color: inputColor,
      focusColor,
      requiredColor,
    } = themeGet(props, 'input');
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
    const gutter = themeGet(props, 'gutter');
    const headingWeight = themeGet(props, 'headingWeight');
    const headingSize = themeGet(props, 'headingSizes', { key: 'as', base: 'h1' });

    return css`
      font-size: ${headingSize};
      font-family: inherit;
      font-weight: ${headingWeight};
      line-height: ${base.lineHeight};
      margin: 0 0 ${gutterBottom ? px(gutter[2]) : 0};
      ${borders};
      ${fontSize};
      ${fontWeight};
      ${space};
      ${textAlign};
    `;
  },
};

export const GroupStyles = {
  base(props) {
    const gutter = themeGet(props, 'gutter');

    return css`
      ${space};
      
      > * + * {
        margin-left: ${px(gutter[1])};
      }
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
    const palette = themeGet(props, 'palette');
    const grays = themeGet(props, 'grays');

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
    } = themeGet(props, 'list');

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
    const { padding } = themeGet(props, 'list');

    return css`
      padding: ${padding[size]};
    `;
  },
  itemSibling(props) {
    const { bordered } = props;
    const { borderColor } = themeGet(props, 'list');

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
    const { borderColors, colors } = themeGet(props, 'table');

    return css`
      background-color: ${colors[inverted ? 'secondary' : 'primary']};
      ${bordered && !borderless ? `border: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};` : ''};
      border-collapse: collapse;
      color: ${colors[inverted ? 'primary' : 'secondary']};
      width: 100%;
    `;
  },
  caption(props) {
    const { captionColor, captionPadding } = themeGet(props, 'table');

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
    const { borderColors } = themeGet(props, 'table');

    if (borderless) {
      return '';
    }

    return css`${bordered ? 'border' : 'border-top'}: 1px solid ${borderColors[inverted ? 'secondary' : 'primary']};`;
  },
  color(props) {
    const { inverted } = props;
    const { colors } = themeGet(props, 'table');

    return css`color: ${colors[inverted ? 'primary' : 'secondary']};`;
  },
  headBackgroundColor(props) {
    const { head } = props;
    const { headColors } = themeGet(props, 'table');

    return css`background-color: ${headColors[head] || 'transparent'};`;
  },
  headCellBorder(props) {
    const { bordered, borderless, inverted } = props;
    const { borderColors } = themeGet(props, 'table');
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
    const { colors } = themeGet(props, 'table');

    if (head) {
      return css`color: ${colors[head === 'dark' ? 'primary' : 'secondary']};`;
    }

    return '';
  },
  padding(props) {
    const { size } = props;
    const { padding } = themeGet(props, 'table');

    return css`padding: ${padding[size]};`;
  },
  striped(props) {
    const { inverted, striped } = props;
    const { stripedColors } = themeGet(props, 'table');

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

export const SwitchStyles = {
  base(props) {
    const { size, status } = props;
    const sizes = themeGet(props, 'switchSizes');
    const themeColor = getColor(props);

    return css`
      cursor: pointer;
      height: ${sizes[size].height};
      position: relative;
      user-select: none;
      vertical-align: middle;
      width: ${sizes[size].width};
      ${space};
      
      input {
        bottom: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      
      .__track {
        background-color: ${status ? themeColor : '#ccc'};
        border-radius: ${sizes[size].borderRadius};
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      .__button {
        background-color: #fff;
        border-radius: 50%;
        bottom: ${sizes[size].space};
        left: ${status ? '50%' : sizes[size].space};
        position: absolute;
        top: ${sizes[size].space}
        transition: left 0.1s ease;
        width: ${calcUnits(sizes[size].height, '-', calcUnits(sizes[size].space, '*', 2))};
      }
    `;
  },
};
