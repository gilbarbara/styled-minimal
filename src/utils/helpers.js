// @flow
import * as defaultTheme from './styles';

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */
export const getProp = (path: string, key?: string, defaultValue?: string): any => (props) => {
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };

  if (key) {
    return theme[path][props[key] || defaultValue];
  }

  return theme[path];
};
