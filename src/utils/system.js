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
  style,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';

import { getColor, getTheme, getYiq, px, themeGet } from './helpers';
import { placeholder } from './mixins';
import { inputTextOptions } from './options';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
  transformValue: px,
});

const base = {
  color: props => {
    const { dark, outline } = props;
    const colors = themeGet(props, 'colors');
    const selectedColor = getColor(props);

    let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
    baseColor = outline || dark ? selectedColor : baseColor;

    return css`
      color: ${baseColor};
    `;
  },
  variant(props) {
    const { dark, outline } = props;
    const { colors, darkColor } = themeGet(props);
    const themeColor = getColor(props);

    const backgroundColor = outline ? colors.white : themeColor;
    const baseColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    let selectedColor = outline ? themeColor : baseColor;

    if (dark) {
      const colorDiff = Math.abs(getYiq(darkColor) - getYiq(themeColor));
      selectedColor = colorDiff > 40 ? themeColor : lighten(0.3, themeColor);
    }
    else if (outline) {
      const colorDiff = Math.abs(getYiq(backgroundColor) - getYiq(themeColor));
      selectedColor = colorDiff > 50 ? themeColor : darken(0.2, themeColor);
    }

    return css`
      background-color: ${dark ? darkColor : backgroundColor};
      border: 1px solid ${dark && !outline ? darkColor : themeColor};
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
      border-radius: ${px(radii)};
      font-size: ${base.fontSize};
      line-height: ${base.lineHeight};
      max-width: ${px(alertMaxWidth)};
      padding: ${px(padding[size][0])} ${px(padding[size][1])};
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
      border-radius: ${px(radii)};
      display: inline-flex;
      font-size: ${badgeFontSize};
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      font-weight: ${badgeFontWeight};
      line-height: 1;
      padding: ${px(padding[0])} ${px(padding[1])};
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
      ${alignSelf};
      ${backgroundImage};
      ${borders};
      ${borderRadius};
      ${bottom};
      ${color};
      ${display};
      ${flex};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${height};
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
    const { animate, disabled, outline, size } = props;
    const {
      borderRadius: radii,
      disabledOpacity,
      lineHeight: buttonLineHeight,
      loader,
      padding,
    } = themeGet(props, 'button');
    const fontSizeProp = themeGet(props, 'componentSizes', { key: 'size' });

    return css`
      ${base.variant};
      align-items: center;
      border-radius: ${px(radii[size])};
      box-shadow: none;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      justify-content: center;
      line-height: ${buttonLineHeight};
      ${disabled && `opacity: ${disabledOpacity};`};
      padding: ${px(padding[size][0])} ${px(padding[size][1])};
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
      ${textTransform};
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
      background-color: #e8eded;
      border: 1px solid #d0dada;
      border-radius: 2px;
      font-family: "SF Mono", "Roboto Mono", Menlo, monospace;
      padding: 10px;
      ${color};
      ${borders};
      ${borderRadius};
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
      max-width: ${container.maxWidth ? px(container.maxWidth) : 'none'};
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
    const { inline } = props;
    const { gutter } = getTheme(props);
    const {
      borderColor,
      borderRadius: radii,
      padding,
      marginBottom,
    } = themeGet(props, 'fieldset');

    return css`
      border: 1px solid ${borderColor};
      border-radius: ${px(radii)};
      margin-bottom: ${px(marginBottom)};
      padding: ${px(padding)};
      text-align:left;
  
      > *:not(legend) {
        ${inline ? 'display: inline-block;' : ''};
        
        + * {
          ${inline ? `margin-left: ${px(gutter[1])} ;` : ''};
        }
      }
    `;
  },
  form(props) {
    const { bordered } = props;
    const {
      borderColor,
      borderRadius: radii,
      padding,
    } = themeGet(props, 'form');

    return css`
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${px(radii)};` : ''}
      ${bordered ? `padding: ${px(padding)};` : ''}
      text-align:left;
    `;
  },
  group(props) {
    const { bordered } = props;
    const {
      borderColor,
      borderRadius: radii,
      marginBottom,
      padding,
    } = themeGet(props, 'formGroup');

    return css`
      ${bordered ? `border: 1px solid ${borderColor};` : ''}
      ${bordered ? `border-radius: ${px(radii)};` : ''}
      margin-bottom: ${px(marginBottom)};
      ${bordered ? `padding: ${px(padding)};` : ''};
      text-align: left;
      ${width};
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
      border: ${borderWidth ? `${px(borderWidth)} solid ${thisColor}` : ''};
      border-radius: ${px(radii)};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: inherit;
      font-size: ${px(inputFontSize[size])};
      ${inputTextOptions.includes(type) ? `height: ${px(inputHeight[size])}` : ''};
      line-height: ${inputLineHeight};
      ${['checkbox', 'radio'].includes(type) ? `margin: 0 ${px(inlineMargin)} 0 0` : ''};
      padding: ${inputTextOptions.includes(type) ? px(padding[size]) : 0};
      ${!['checkbox', 'radio', 'color'].includes(type) ? 'width: 100%;' : ''};
      
      &[type=file] {
        font-size: ${px(inputFontSize[size] - 1)};
        padding: ${px(padding[size] - 1)};
      }
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
      align-items: center;
      color: ${labelColor};
      display: flex;
      font-family: inherit;
      font-weight: ${labelFontWeight};
      ${inline ? `font-size: ${px(inlineFontSize)}` : ''};
      line-height: ${base.lineHeight};
      ${!inline ? `margin-bottom: ${px(marginBottom)}` : ''};
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
      margin-bottom: ${px(marginBottom)};
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
      border-radius: ${px(radii)};
      color: ${selectColor};
      display: block;
      ${!multiple ? `height: ${px(selectHeight[sizing])}` : ''};
      font-family: inherit;
      font-size: ${px(selectFontSize[sizing])};
      line-height: ${selectLineHeight};
      ${!multiple ? `padding: ${px(padding[sizing])};` : ''};
      white-space: nowrap;
      width: 100%;
      
      > option {
        background-color: ${bgColor};
        font-size: ${px(selectFontSize[sizing])};
        line-height: ${selectLineHeight};
        padding: ${px(padding[sizing])};
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
      border-radius: ${px(radii)};
      color: ${inputColor};
      display: ${!['checkbox', 'radio'].includes(type) ? 'block' : 'inline-block'};
      font-family: inherit;
      font-size: ${px(inputFontSize[size])};
      line-height: ${lineHeightTextarea};
      margin: 0;
      padding: ${px(padding[size])};
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
      margin-top: ${px(helpMarginTop)};
    `;
  },
  inlineMargin(props) {
    const { inlineMargin } = themeGet(props, 'formGroup');

    return px(inlineMargin);
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
    const headingSize = themeGet(props, 'headingSizes', { key: ['size', 'as'], base: 'h1' });

    return css`
      font-size: ${px(headingSize)};
      font-family: inherit;
      font-weight: ${headingWeight};
      line-height: ${base.lineHeight};
      margin: ${px(gutter[2])} 0 ${gutterBottom ? px(gutter[2]) : 0};
      ${borders};
      ${borderRadius};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
      ${textAlign};
      ${textTransform};
      
      &:first-child {
        margin-top: 0;
      }
    `;
  },
};

export const GroupStyles = {
  base(props) {
    const { grid, gutter } = themeGet(props);

    return css`
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      ${flexWrap}
      ${space};
      
      > * + * {
        ${grid.sm} {
          padding-left: ${px(gutter[1])};
        }
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
      ${borderRadius};
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
      ${bordered ? `border-radius: ${px(radii)};` : ''};
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
      padding: ${px(padding[size])};
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
      ${borderRadius};
      ${display};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
      ${textTransform};
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

export const SwitchStyles = {
  base(props) {
    const { size, status } = props;
    const sizes = themeGet(props, 'switchSizes');
    const themeColor = getColor(props);

    return css`
      cursor: pointer;
      height: ${px(sizes[size].height)};
      position: relative;
      user-select: none;
      vertical-align: middle;
      width: ${px(sizes[size].width)};
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
        border-radius: ${px(sizes[size].borderRadius)};
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      .__button {
        background-color: #fff;
        border-radius: 50%;
        bottom: ${px(sizes[size].space)};
        left: ${status ? '50%' : px(sizes[size].space)};
        position: absolute;
        top: ${px(sizes[size].space)}
        transition: left 0.1s ease;
        width: ${px(sizes[size].height - (sizes[size].space * 2))};
      }
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
        padding-bottom: ${px(captionPadding)};
        padding-top: ${px(captionPadding)};
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

    return css`padding: ${px(padding[size])};`;
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
      ${borderRadius};
      ${display};
      ${fontFamily};
      ${fontSize};
      ${fontWeight};
      ${lineHeight};
      ${space};
      ${textTransform};
    `;
  },
};
