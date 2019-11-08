/*eslint-disable @typescript-eslint/no-use-before-define */
import * as deepmerge from 'deepmerge';
import css, { Theme as SystemTheme } from '@styled-system/css';
import { CSSObject } from 'styled-components';
import { darken, getLuminance, lighten, parseToRgb } from './polished';

import * as defaultTheme from './theme';

import {
  Breakpoints,
  CommonProps,
  MediaQueries,
  PlainObject,
  RecursivePartial,
  ResponsiveObject,
  ResponsiveSizes,
  Theme,
} from '../types';

/** Check if a variable is defined **/
export const isDefined = (value: unknown): boolean => typeof value !== 'undefined';

/** Check if a variable is a boolean **/
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export const isCSSUnit = (value: unknown): value is string => {
  const units = ['em', 'px', 'rem', 'vh', 'vmax', 'vmin', 'vw'];
  const regex = new RegExp(`\\d+(${units.join('|')})$`);

  return typeof value === 'string' && regex.test(value);
};

/** Check if a variable is a number **/
export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isNumericString = (value: unknown): value is string => {
  return typeof value === 'string' && (value as string).length > 0 && !Number.isNaN(Number(value));
};

/** Get textual unit value */
export const px = (value: string | number): string =>
  isNumber(value) || isNumericString(value) ? `${value}px` : value || '0px';

const getMediaQueries = (breakpoints: Breakpoints): MediaQueries => {
  return Object.keys(breakpoints)
    .filter(d => Number.isNaN(parseInt(d, 10)))
    .reduce((acc: PlainObject, d) => {
      acc[d] = `@media screen and (min-width: ${px(breakpoints[d])})`;
      return acc;
    }, {}) as MediaQueries;
};

/**
 * Generate the media query
 */
const createMediaQuery = (size: ResponsiveSizes, mediaQueries: MediaQueries): string => {
  if (isCSSUnit(size) || isNumericString(size)) {
    return `@media screen and (min-width: ${px(size)})`;
  }

  return mediaQueries[size];
};

/**
 * Get color from theme
 */
export function getColor(props: CommonProps, base = 'primary'): string {
  const { colors, grays, palette } = getTheme(props);

  try {
    const { variant = '' } = props;

    return palette[variant] || colors[variant] || grays[variant] || palette[base];
  } catch (error) {
    return palette.primary;
  }
}

export function getDarkColor(props: CommonProps) {
  const { darkColor } = getTheme(props);
  const themeColor = getColor(props);

  return getContrastedColor(darkColor, themeColor);
}

export function getDimmerColor(color: string): string {
  try {
    const luminance = getLuminance(color);
    let dimmer = lighten(0.4, color);

    if (luminance > 0.7) {
      dimmer = darken(0.2, color);
    } else if (luminance > 0.2) {
      dimmer = lighten(0.2, color);
    } else if (luminance > 0.1) {
      dimmer = lighten(0.3, color);
    }

    return dimmer;
  } catch (error) {
    /* istanbul ignore next */
    if (process.env.NODE_ENV === 'development') {
      console.error(error); //eslint-disable-line no-console
    }

    return '';
  }
}

export function getContrastedColor(baseColor: string, color: string): string {
  const limit = 75;
  let colorDiff = Math.abs(getYiq(baseColor) - getYiq(color));
  let readableColor = color;

  if (colorDiff >= limit) {
    return readableColor;
  }

  while (colorDiff < limit) {
    readableColor = lighten(0.1, readableColor);
    colorDiff = Math.abs(getYiq(baseColor) - getYiq(readableColor));
  }

  return readableColor;
}

export function getProps(props: any = {}) {
  return {
    ...props,
    theme: mergeTheme(props.theme),
  };
}

export function getTextColor(props: CommonProps): string {
  try {
    const colors = getTheme(props, 'colors');
    const currentColor = getColor(props);

    return getYiq(currentColor) > 180 ? colors.black : colors.white;
  } catch (error) {
    return '#000';
  }
}

/**
 * Get the merged theme
 */
export const getTheme = (props: CommonProps, path?: keyof Theme): any => {
  const theme = mergeTheme(props && props.theme);

  return path ? theme[path] : theme;
};

/**
 * Color contrast
 */
export function getYiq(color: string): number {
  try {
    const { red, green, blue } = parseToRgb(color);

    return (red * 299 + green * 587 + blue * 114) / 1000;
  } catch (error) {
    return 0;
  }
}

/**
 * Merge ThemeProvides's theme with the default theme
 */
export const mergeTheme = (theme: RecursivePartial<Theme> = {}): Theme =>
  deepmerge((defaultTheme as unknown) as Theme, theme, {
    arrayMerge: (_dest: any[], source: any[]) => source,
  }) as Theme;

/**
 * SC Helper to generate responsive media queries1
 */
export const responsive = (rules: ResponsiveObject) => (props: CommonProps) => {
  const { breakpoints } = getTheme(props);
  const entries: CSSObject = {};
  const mediaQueries = getMediaQueries(breakpoints);

  for (const rule in rules) {
    /* istanbul ignore else */
    if ({}.hasOwnProperty.call(rules, rule)) {
      const breakpoint = rule as ResponsiveSizes;
      const styles = css(rules[breakpoint])(props as { theme: SystemTheme });
      const query = createMediaQuery(breakpoint, mediaQueries);

      if (breakpoint === '_') {
        Object.keys(styles).forEach(d => {
          entries[d] = styles[d];
        });
      } else if (query) {
        entries[query] = styles;
      }
    }
  }

  return entries;
};

/**
 * Helper to get the corresponding item from the space scale
 */
export const spacer = (value: number | string) => (props: CommonProps): string => {
  const { space } = getTheme(props);

  return px(space[value] || value);
};
