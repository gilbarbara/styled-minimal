import lighten from 'polished/lib/color/lighten';

import { getColor, getProp, getYiq } from './helpers';

export const backgroundColor = props => {
  const { disabled, outline, variant } = props;
  const colors = getProp('colors')(props);
  const palette = getProp('palette')(props);

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
