import { NumberOrString } from './common';

interface BaseInput {
  backgroundColor: string;
  borderColor: string;
  borderRadius: NumberOrString;
  borderWidth: NumberOrString;
  color: string;
  disabledColor: string;
  fontSize: Sizes;
  height: Sizes;
  lineHeight: NumberOrString;
  padding: Padding;
  requiredColor: string;
  validation: Validation;
}

export type Breakpoints = NumberOrString[] & { [key: string]: NumberOrString };

interface HeadingSizes {
  h1: NumberOrString;
  h2: NumberOrString;
  h3: NumberOrString;
  h4: NumberOrString;
  h5: NumberOrString;
  h6: NumberOrString;
}

export interface MediaQueries {
  _: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  [key: string]: any;
}

interface Padding {
  xs: NumberOrString[];
  sm: NumberOrString[];
  md: NumberOrString[];
  lg: NumberOrString[];
  xl: NumberOrString[];
}

interface Sizes {
  sm: NumberOrString;
  md: NumberOrString;
  lg: NumberOrString;
}

interface SizesAll {
  xs: NumberOrString;
  sm: NumberOrString;
  md: NumberOrString;
  lg: NumberOrString;
  xl: NumberOrString;
}

interface SwitchItem {
  borderRadius: NumberOrString;
  height: NumberOrString;
  space: NumberOrString;
  width: NumberOrString;
}

interface SwitchSizes {
  xs: SwitchItem;
  sm: SwitchItem;
  md: SwitchItem;
  lg: SwitchItem;
  xl: SwitchItem;
}

interface TableColorShades {
  light: string;
  dark: string;
}

interface TableColors {
  primary: string;
  secondary: string;
}

interface Validation {
  invalid: string;
  valid: string;
}

/**
 * Colors
 */

export interface Colors {
  white: string;
  red: string;
  pink: string;
  purple: string;
  indigo: string;
  blue: string;
  cyan: string;
  teal: string;
  green: string;
  lime: string;
  yellow: string;
  amber: string;
  orange: string;
  brown: string;
  black: string;
}

export interface Grays {
  gray03: string;
  gray05: string;
  gray10: string;
  gray20: string;
  gray30: string;
  gray40: string;
  gray50: string;
  gray60: string;
  gray70: string;
  gray80: string;
  gray90: string;
}

export interface Palette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  light: string;
  dark: string;
}

/**
 * Components
 */

interface Alert {
  borderRadius: NumberOrString;
  maxWidth: NumberOrString;
  padding: string;
}

interface Badge {
  borderRadius: NumberOrString;
  fontSize: NumberOrString;
  fontWeight: NumberOrString;
  lineHeight: NumberOrString;
  padding: NumberOrString;
  size: NumberOrString;
  sizeDot: NumberOrString;
}

interface Button {
  borderRadius: SizesAll;
  disabledOpacity: number;
  lineHeight: NumberOrString;
  padding: Padding;
  textTransform: string;
  loader: (color: string) => string;
}

interface Checkbox {
  backgroundColor: string;
  borderRadius: NumberOrString;
  borderColor: string;
  fontSize: Sizes;
  sizes: Sizes;
}

interface Code {
  backgroundColor: string;
  blockColor: string;
  blockPadding: NumberOrString;
  border: string;
  borderRadius: NumberOrString;
  color: string;
  fontFamily: string;
  padding: NumberOrString;
}

interface Form {
  borderColor: string;
  borderRadius: NumberOrString;
  borderWidth: NumberOrString;
  padding: NumberOrString;
}

interface FormGroup {
  borderColor: string;
  borderRadius: NumberOrString;
  helpColor: string;
  helpMarginTop: NumberOrString;
  inlineMargin: NumberOrString;
  marginBottom: NumberOrString;
  padding: NumberOrString;
}

interface Fieldset {
  borderColor: string;
  borderRadius: NumberOrString;
  color: string;
  marginBottom: NumberOrString;
  padding: NumberOrString;
}

interface Label {
  color: string;
  inlineFontSize: NumberOrString;
  marginBottom: NumberOrString;
}

interface Legend {
  color: string;
  marginBottom: NumberOrString;
}

interface List {
  borderColor: string;
  borderRadius: NumberOrString;
  color: string;
  padding: Sizes;
}

interface Radio {
  backgroundColor: string;
  borderRadius: NumberOrString;
  borderColor: string;
  fontSize: Sizes;
  sizes: Sizes;
}

interface Table {
  borderColors: TableColors;
  captionColor: string;
  captionPadding: NumberOrString;
  colors: TableColors;
  headColors: TableColorShades;
  padding: Padding;
  stripedColors: TableColors;
}

export type Variants = keyof Palette | keyof Colors | keyof Grays;

export interface Theme {
  alert: Alert;
  badge: Badge;
  baseInput: BaseInput;
  borderColor: string;
  breakpoints: Breakpoints;
  button: Button;
  buttonAnimation: string;
  checkbox: Checkbox;
  code: Code;
  colors: Colors;
  darkColor: string;
  fieldset: Fieldset;
  fontSizes: NumberOrString[];
  fontSizesScale: SizesAll;
  form: Form;
  formGroup: FormGroup;
  grays: Grays;
  headingSizes: HeadingSizes;
  headingWeight: NumberOrString;
  input: BaseInput;
  label: Label;
  legend: Legend;
  lineHeight: NumberOrString;
  list: List;
  palette: Palette;
  radio: Radio;
  select: BaseInput;
  space: number[];
  switchSizes: SwitchSizes;
  table: Table;
  textarea: BaseInput;
  textColor: string;
  variants: Variants;
}
