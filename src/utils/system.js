import lighten from 'polished/lib/color/lighten';

import { getColor, getProp, getYiq } from './helpers';

export const backgroundColor = props => {
  const { disabled, outline } = props;
  const colors = getProp('colors')(props);
  const baseColor = outline ? colors.white : getColor(props);

  return `background-color: ${disabled && !outline ? lighten(0.2, baseColor) : baseColor}`;
};

export const border = props => {
  const { disabled, outline } = props;
  const selectedColor = getColor(props);
  const baseColor = disabled ? lighten(0.3, selectedColor) : selectedColor;

  return `border: ${outline ? `1px solid ${baseColor}` : 0}`;
};

export const color = props => {
  const { disabled, outline } = props;
  const colors = getProp('colors')(props);
  const selectedColor = getColor(props);

  let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
  baseColor = outline ? selectedColor : baseColor;

  return `color: ${disabled ? lighten(0.3, baseColor) : baseColor}`;
};

export const fontFamily = props => `font-family: ${getProp('fontFamily')(props)}`;
export const fontSize = props => `font-size: ${getProp('fontSizes', { key: 'size', base: 'md' })(props)}`;
export const fontWeight = props => `font-weight: ${getProp('fontWeights', { key: 'weight', base: 'normal' })(props)}`;
export const lineHeight = props => `line-height: ${getProp('lineHeight')(props)}`;

export const AlertStyles = {
  borderRadius(props) {
    const { borderRadius } = getProp('alert')(props);

    return `border-radius: ${borderRadius}`;
  },
  maxWidth(props) {
    const { maxWidth } = getProp('alert')(props);

    return `max-width: ${maxWidth}`;
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('alert')(props);

    return `padding: ${padding[size]}`;
  },
};

export const BadgeStyles = {
  borderRadius(props) {
    const { borderRadius } = getProp('badge')(props);
    return `border-radius: ${borderRadius}`;
  },
  fontSize(props) {
    const { fontSize: badgeFontSize } = getProp('badge')(props);
    return `font-size: ${badgeFontSize}`;
  },
  fontWeight(props) {
    const { fontWeight: badgeFontWeight } = getProp('badge')(props);
    return `font-weight: ${badgeFontWeight}`;
  },
  padding(props) {
    const { padding } = getProp('badge')(props);
    return `padding: ${padding}`;
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
    return `border-radius: ${borderRadius[size]}`;
  },
  lineHeight(props) {
    const { lineHeight: buttonLineHeight } = getProp('button')(props);
    return `line-height: ${buttonLineHeight}`;
  },
  outlineColor(props) {
    return `outline-color: ${getColor(props)}`;
  },
  padding(props) {
    const { size } = props;
    const { padding } = getProp('button')(props);

    return `padding: ${padding[size]}`;
  },
  size(props) {
    const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);
    return fontSizeProp ? `font-size: ${fontSizeProp}` : '';
  },
};
