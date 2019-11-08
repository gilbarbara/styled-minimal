import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  grid,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  // @ts-ignore
  overflowX,
  // @ts-ignore
  overflowY,
  position,
  space,
  styleFn,
  system,
  typography,
  verticalAlign,
  width,
} from 'styled-system';

const layout: styleFn = compose(
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  overflowX,
  overflowY,
  verticalAlign,
  width,
);

export const boxShadow = system({
  boxShadow: true,
});

export const cursor = system({
  cursor: true,
});

export const filter = system({
  filter: true,
});

export const outlines = system({
  outline: true,
  outlineColor: true,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
});

export const textDecoration = system({
  textDecoration: true,
});

export const textTransform = system({
  textTransform: true,
});

export const styleSystem = compose(
  background,
  border,
  boxShadow,
  color,
  cursor,
  filter,
  flexbox,
  grid,
  layout,
  outlines,
  position,
  space,
  typography,
  textDecoration,
  textTransform,
);
