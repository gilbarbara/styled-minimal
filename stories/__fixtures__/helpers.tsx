import { getTheme } from '../../src';
import { Sizes, SizesAll, Variants } from '../../src/types';

const theme = getTheme();

export const capitalize = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

export const variants = [
  ...Object.keys(theme.palette),
  ...Object.keys(theme.colors),
  ...Object.keys(theme.grays),
] as Variants[];

export const sizesOptions: Sizes[] = ['sm', 'md', 'lg'];
export const sizesOptionsAll: SizesAll[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const styleProps = [
  {
    name: 'Space',
    items: [
      { props: ['m', 'margin'], css: 'margin', field: 'space' },
      { props: ['mt', 'marginTop'], css: 'margin-top', field: 'space' },
      { props: ['mr', 'marginRight'], css: 'margin-right', field: 'space' },
      { props: ['mb', 'marginBottom'], css: 'margin-bottom', field: 'space' },
      { props: ['ml', 'marginLeft'], css: 'margin-left', field: 'space' },
      { props: ['mx'], css: 'margin-left and margin-right', field: 'space' },
      { props: ['my'], css: 'margin-top and margin-bottom', field: 'space' },
      { props: ['p', 'padding'], css: 'padding', field: 'space' },
      { props: ['pt', 'paddingTop'], css: 'padding-top', field: 'space' },
      { props: ['pr', 'paddingRight'], css: 'padding-right', field: 'space' },
      { props: ['pb', 'paddingBottom'], css: 'padding-bottom', field: 'space' },
      { props: ['pl', 'paddingLeft'], css: 'padding-left', field: 'space' },
      { props: ['px'], css: 'padding-left and padding-right', field: 'space' },
      { props: ['py'], css: 'padding-top and padding-bottom', field: 'space' },
    ],
  },
  {
    name: 'Color',
    items: [
      { props: ['bg', 'backgroundColor'], css: 'background-color', field: 'colors' },
      { props: ['opacity'], css: 'opacity', field: 'none' },
      { props: ['textColor'], css: 'color', field: 'colors' },
    ],
  },
  {
    name: 'Typography',
    items: [
      { props: ['fontFamily'], css: 'font-family', field: 'fonts' },
      { props: ['fontSize'], css: 'font-size', field: 'fontSizes' },
      { props: ['fontStyle'], css: 'font-style', field: 'none' },
      { props: ['fontWeight'], css: 'font-weight', field: 'fontWeights' },
      { props: ['letterSpacing'], css: 'letter-spacing', field: 'letterSpacings' },
      { props: ['lineHeight'], css: 'line-height', field: 'lineHeights' },
      { props: ['textAlign'], css: 'text-align', field: 'none' },
      { props: ['textDecoration'], css: 'text-decoration', field: 'none' },
    ],
  },
  {
    name: 'Layout',
    items: [
      { props: ['display'], css: 'display', field: 'none' },
      { props: ['height'], css: 'height', field: 'sizes' },
      { props: ['maxHeight'], css: 'max-height', field: 'sizes' },
      { props: ['maxWidth'], css: 'max-width', field: 'sizes' },
      { props: ['minHeight'], css: 'min-height', field: 'sizes' },
      { props: ['minWidth'], css: 'min-width', field: 'sizes' },
      { props: ['overflow'], css: 'overflow', field: 'none' },
      { props: ['overflowX'], css: 'overflowX', field: 'none' },
      { props: ['overflowY'], css: 'overflowY', field: 'none' },
      { props: ['size'], css: 'width height', field: 'sizes' },
      { props: ['verticalAlign'], css: 'vertical-align', field: 'none' },
      { props: ['width'], css: 'width', field: 'sizes' },
    ],
  },
  {
    name: 'Flex',
    items: [
      { props: ['alignContent'], css: 'align-content', field: 'none' },
      { props: ['alignItems'], css: 'align-items', field: 'none' },
      { props: ['alignSelf'], css: 'align-self', field: 'none' },
      { props: ['flex'], css: 'flex (shorthand)', field: 'none' },
      { props: ['flexBasis'], css: 'flex-basis', field: 'none' },
      { props: ['flexDirection'], css: 'flex-direction', field: 'none' },
      { props: ['flexGrow'], css: 'flex-grow', field: 'none' },
      { props: ['flexShrink'], css: 'flex-shrink', field: 'none' },
      { props: ['flexWrap'], css: 'flex-wrap', field: 'none' },
      { props: ['justifyContent'], css: 'justify-content', field: 'none' },
      { props: ['justifyItems'], css: 'justify-items', field: 'none' },
      { props: ['justifySelf'], css: 'justify-self', field: 'none' },
      { props: ['order'], css: 'order', field: 'none' },
    ],
  },
  {
    name: 'Grid',
    items: [
      { props: ['gridArea'], css: 'grid-area', field: 'none' },
      { props: ['gridAutoColumns'], css: 'grid-auto-columns', field: 'none' },
      { props: ['gridAutoFlow'], css: 'grid-auto-flow', field: 'none' },
      { props: ['gridAutoRows'], css: 'grid-auto-rows', field: 'none' },
      { props: ['gridColumn'], css: 'grid-column', field: 'none' },
      { props: ['gridColumnGap'], css: 'grid-column-gap', field: 'space' },
      { props: ['gridGap'], css: 'grid-gap', field: 'space' },
      { props: ['gridRow'], css: 'grid-row', field: 'none' },
      { props: ['gridRowGap'], css: 'grid-row-gap', field: 'space' },
      { props: ['gridTemplateAreas'], css: 'grid-template-areas', field: 'none' },
      { props: ['gridTemplateColumns'], css: 'grid-template-columns', field: 'none' },
      { props: ['gridTemplateRows'], css: 'grid-template-rows', field: 'none' },
    ],
  },
  {
    name: 'Background',
    items: [
      { props: ['background'], css: 'background', field: 'none' },
      { props: ['backgroundImage'], css: 'background-image', field: 'none' },
      { props: ['backgroundPosition'], css: 'background-position', field: 'none' },
      { props: ['backgroundRepeat'], css: 'background-repeat', field: 'none' },
      { props: ['backgroundSize'], css: 'background-size', field: 'none' },
    ],
  },
  {
    name: 'Border',
    items: [
      { props: ['border'], css: 'border', field: 'borders' },
      { props: ['borderColor'], css: 'border-color', field: 'colors' },
      { props: ['borderStyle'], css: 'border-style', field: 'borderStyles' },
      { props: ['borderWidth'], css: 'border-width', field: 'borderWidths' },
      { props: ['borderRadius'], css: 'border-radius', field: 'radii' },
      { props: ['borderTop'], css: 'border-top', field: 'borders' },
      { props: ['borderTopColor'], css: 'border-top-color', field: 'colors' },
      { props: ['borderTopStyle'], css: 'border-top-style', field: 'borderStyles' },
      { props: ['borderTopWidth'], css: 'border-top-width', field: 'borderWidths' },
      { props: ['borderTopLeftRadius'], css: 'border-top-left-radius', field: 'radii' },
      { props: ['borderTopRightRadius'], css: 'border-top-right-radius', field: 'radii' },
      { props: ['borderRight'], css: 'border-right', field: 'borders' },
      { props: ['borderRightColor'], css: 'border-right-color', field: 'colors' },
      { props: ['borderRightStyle'], css: 'border-right-style', field: 'borderStyles' },
      { props: ['borderRightWidth'], css: 'border-right-width', field: 'borderWidths' },
      { props: ['borderBottom'], css: 'border-bottom', field: 'borders' },
      { props: ['borderBottomColor'], css: 'border-bottom-color', field: 'colors' },
      { props: ['borderBottomStyle'], css: 'border-bottom-style', field: 'borderStyles' },
      { props: ['borderBottomWidth'], css: 'border-bottom-width', field: 'borderWidths' },
      { props: ['borderBottomLeftRadius'], css: 'border-bottom-left-radius', field: 'radii' },
      { props: ['borderBottomRightRadius'], css: 'border-bottom-right-radius', field: 'radii' },
      { props: ['borderLeft'], css: 'border-left', field: 'borders' },
      { props: ['borderLeftColor'], css: 'border-left-color', field: 'colors' },
      { props: ['borderLeftStyle'], css: 'border-left-style', field: 'borderStyles' },
      { props: ['borderLeftWidth'], css: 'border-left-width', field: 'borderWidths' },
      { props: ['borderX'], css: 'border-left & border-right', field: 'borders' },
      { props: ['borderY'], css: 'border-top & border-bottom', field: 'borders' },
    ],
  },
  {
    name: 'Position',
    items: [
      { props: ['position'], css: 'position', field: 'none' },
      { props: ['top'], css: 'top', field: 'space' },
      { props: ['right'], css: 'right', field: 'space' },
      { props: ['bottom'], css: 'bottom', field: 'space' },
      { props: ['left'], css: 'left', field: 'space' },
      { props: ['zIndex'], css: 'z-index', field: 'zIndices' },
    ],
  },
  {
    name: 'Shadow',
    items: [
      { props: ['boxShadow'], css: 'box-shadow', field: 'shadows' },
      { props: ['textShadow'], css: 'text-shadow', field: 'shadows' },
    ],
  },
];
