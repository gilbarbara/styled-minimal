import * as React from 'react';
import { ButtonTypes, ComponentProps, InputTypes, NumberOrString, Sizes, SizesAll } from './common';
import { BaseProps } from './system';
import { Variants } from './theme';

interface WithDark {
  /** Dark background with the variant (if available) as text color */
  dark?: boolean;
}

interface WithFrame {
  /** Add a border around the element */
  frame?: boolean;
}

interface WithInline {
  /** Display as an inline element */
  inline?: boolean;
}

interface WithInvert {
  /** Transparent background with the variant as border and text color */
  invert?: boolean;
}

interface WithSizes {
  /** Component size */
  size?: Sizes;
}

interface WithSizesAll {
  /** Component size */
  size?: SizesAll;
}

interface WithVariant {
  /** Primary color */
  variant?: Variants;
}

/**
 * Alert
 */
interface AlertKnownProps extends BaseProps, WithDark, WithInvert, WithVariant {
  children: React.ReactNode;
}

export interface AlertProps
  extends AlertKnownProps,
    ComponentProps<HTMLDivElement, AlertKnownProps> {}

/**
 * Badge
 */
interface BadgeKnownProps extends BaseProps, WithDark, WithInvert, WithVariant {
  children: React.ReactNode;
  dot?: boolean;
}

export interface BadgeProps
  extends BadgeKnownProps,
    ComponentProps<HTMLSpanElement, BadgeKnownProps> {}

/**
 * Box
 */
export interface BoxProps extends BaseProps, ComponentProps<HTMLDivElement, BaseProps> {}

/**
 * Button
 */
export interface ButtonKnownProps
  extends BaseProps,
    WithDark,
    WithInvert,
    WithSizesAll,
    WithVariant {
  /** Fit to its parent width. */
  block?: boolean;
  /** Add an animation to the background */
  busy?: boolean;
  children: React.ReactNode;
  type?: ButtonTypes;
}

export interface ButtonProps
  extends ButtonKnownProps,
    Omit<ComponentProps<HTMLButtonElement, ButtonKnownProps>, 'loading'> {}

/**
 * ButtonGroup
 */
interface ButtonGroupKnownProps extends BaseProps, WithSizesAll, WithVariant {
  children: React.ReactNode;
}

export interface ButtonGroupProps
  extends ButtonGroupKnownProps,
    ComponentProps<HTMLDivElement, ButtonGroupKnownProps> {}

/**
 * Checkbox
 */
interface CheckboxKnownProps
  extends BaseProps,
    WithDark,
    WithInline,
    WithInvert,
    WithSizes,
    WithVariant {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
}

export interface CheckboxProps
  extends CheckboxKnownProps,
    ComponentProps<HTMLInputElement, CheckboxKnownProps> {}

/**
 * Code
 */
interface CodeKnownProps extends BaseProps {
  children: React.ReactNode;
}

export interface CodeProps extends CodeKnownProps, ComponentProps<HTMLElement, CodeKnownProps> {}

/**
 * Code Block
 */

interface CodeBlockKnownProps extends BaseProps {
  children: React.ReactNode;
}

export interface CodeBlockProps
  extends CodeBlockKnownProps,
    ComponentProps<HTMLPreElement, CodeBlockKnownProps> {}

/**
 * Container
 */
interface ContainerKnownProps extends BaseProps {
  children: React.ReactNode;
  fullScreen?: boolean;
  ySpacing?: boolean;
}

export interface ContainerProps
  extends ContainerKnownProps,
    ComponentProps<HTMLDivElement, ContainerKnownProps> {}

/**
 * Embed
 */
interface EmbedKnownProps extends BaseProps {
  children: string;
  /** The height of the video. Defaults to 9/16 (for a 16:9 aspect ratio) */
  ratio?: number;
}

export interface EmbedProps
  extends EmbedKnownProps,
    ComponentProps<HTMLDivElement, EmbedKnownProps> {}

/**
 * Fieldset
 */
interface FieldsetKnownProps extends BaseProps {
  children: React.ReactNode;
  label?: React.ReactNode;
}

export interface FieldsetProps
  extends FieldsetKnownProps,
    ComponentProps<HTMLFieldSetElement, FieldsetKnownProps> {}

export interface FlexProps extends BaseProps, ComponentProps<HTMLDivElement, BaseProps> {
  children: React.ReactNode;
}

/**
 * Form
 */
interface FormKnownProps extends BaseProps, WithFrame {
  children: React.ReactNode;
}

export interface FormProps
  extends FormKnownProps,
    ComponentProps<HTMLFormElement, FormKnownProps> {}

/**
 * FormGroup
 */
interface FormGroupKnownProps extends BaseProps, WithFrame, WithInline {
  children: React.ReactNode;
  label?: React.ReactNode;
  helpText?: string;
}

export interface FormGroupProps
  extends FormGroupKnownProps,
    ComponentProps<HTMLDivElement, FormGroupKnownProps> {}

export interface GridProps extends BaseProps, ComponentProps<HTMLDivElement, BaseProps> {}

/**
 * Group
 */
interface GroupKnownProps extends BaseProps {
  children: React.ReactNode;
  gap?: NumberOrString;
}

export interface GroupProps
  extends GroupKnownProps,
    ComponentProps<HTMLDivElement, GroupKnownProps> {}

/**
 * Heading
 */
interface HeadingKnownProps extends BaseProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  gutter?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HeadingProps
  extends HeadingKnownProps,
    ComponentProps<HTMLHeadingElement, HeadingKnownProps> {}

/**
 * Image
 */
interface ImageKnownProps extends BaseProps {
  alt: string;
  src: string;
}

export interface ImageProps
  extends ImageKnownProps,
    ComponentProps<HTMLImageElement, ImageKnownProps> {}

/**
 * Input
 */
interface InputKnownProps extends BaseProps, WithSizes {
  type?: InputTypes;
  valid?: boolean;
}

export interface InputProps
  extends InputKnownProps,
    ComponentProps<HTMLInputElement, InputKnownProps> {}

/**
 * Label
 */
interface LabelKnownProps extends BaseProps, WithInline {
  children: React.ReactNode;
}

export interface LabelProps
  extends LabelKnownProps,
    ComponentProps<HTMLLabelElement, LabelKnownProps> {}

/**
 * Legend
 */
interface LegendKnownProps extends BaseProps {
  children: React.ReactNode;
}

export interface LegendProps
  extends LegendKnownProps,
    ComponentProps<HTMLLegendElement, LegendKnownProps> {}

/**
 * Link
 */
interface LinkKnownProps extends BaseProps, WithVariant {
  children: React.ReactNode;
  href: string;
}

export interface LinkProps
  extends LinkKnownProps,
    ComponentProps<HTMLAnchorElement, LinkKnownProps> {}

/**
 * List
 */
interface ListsKnownProps extends BaseProps, WithFrame, WithInline, WithSizes {
  children: React.ReactNode;
}

export interface ULProps
  extends ListsKnownProps,
    ComponentProps<HTMLUListElement, ListsKnownProps> {
  styleType?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-alpha' | 'none' | string;
}

export interface OLProps
  extends ListsKnownProps,
    ComponentProps<HTMLOListElement, ListsKnownProps> {}

export interface DLProps
  extends ListsKnownProps,
    ComponentProps<HTMLDListElement, ListsKnownProps> {}

/**
 * Loader
 */
export interface LoaderKnownProps extends BaseProps, WithVariant {
  color?: string;
  delay?: number;
  opacity?: number;
  size?: NumberOrString;
  speed?: number;
}

export interface LoaderProps
  extends LoaderKnownProps,
    ComponentProps<HTMLDivElement, LoaderKnownProps> {}

/**
 * Paragraph
 */
interface ParagraphKnownProps extends BaseProps {
  children: React.ReactNode;
}

export interface ParagraphProps
  extends ParagraphKnownProps,
    ComponentProps<HTMLParagraphElement, ParagraphKnownProps> {}

/**
 * Radio
 */
interface RadioKnownProps
  extends BaseProps,
    WithDark,
    WithInline,
    WithInvert,
    WithSizes,
    WithVariant {
  disabled?: boolean;
  label?: React.ReactNode;
}

export interface RadioProps
  extends RadioKnownProps,
    ComponentProps<HTMLInputElement, RadioKnownProps> {}

/**
 * RadioGroup
 */
interface RadioGroupOptions extends WithVariant {
  disabled?: boolean;
  label?: React.ReactNode;
  value: NumberOrString;
}

interface RadioGroupKnownProps extends Omit<FormGroupKnownProps, 'children'>, RadioKnownProps {
  defaultValue?: NumberOrString;
  name: string;
  options: RadioGroupOptions[];
  onChange?: (value: NumberOrString) => void;
  value?: NumberOrString;
}

export interface RadioGroupProps
  extends RadioGroupKnownProps,
    ComponentProps<HTMLDivElement, RadioGroupKnownProps> {}

/**
 * Select
 */
interface SelectKnownProps extends BaseProps {
  children: React.ReactNode;
  size?: number;
  /** Component size (select already has an attribute size) */
  sizing?: Sizes;
  valid?: boolean;
}

export interface SelectProps
  extends SelectKnownProps,
    ComponentProps<HTMLSelectElement, SelectKnownProps> {}

/**
 * Switch
 */
interface SwitchKnownProps extends BaseProps, WithSizesAll, WithVariant {
  /**  Initial status (uncontrolled mode) */
  defaultChecked?: boolean;
  /** Status (controlled mode) */
  checked?: boolean;
  disabled?: boolean;
  name: string;
  onChange?: (value: 'on' | 'off') => void;
}

export interface SwitchProps
  extends SwitchKnownProps,
    ComponentProps<HTMLDivElement, SwitchKnownProps> {}

/**
 * Table
 */
interface TableKnownProps extends BaseProps, WithDark, WithFrame, WithSizes {
  clean?: boolean;
  children: React.ReactNode;
  head?: 'normal' | 'light' | 'dark';
  striped?: boolean;
}

export interface TableProps
  extends TableKnownProps,
    ComponentProps<HTMLTableElement, TableKnownProps> {}

/**
 * Text
 */
interface TextKnownProps extends BaseProps {
  children: React.ReactNode;
  muted?: boolean;
}

export interface TextProps
  extends TextKnownProps,
    ComponentProps<HTMLSpanElement, TextKnownProps> {}

/**
 * Textarea
 */
interface TextareaKnownProps extends BaseProps, WithSizes {
  valid?: boolean;
}

export interface TextareaProps
  extends TextareaKnownProps,
    ComponentProps<HTMLTextAreaElement, TextareaKnownProps> {}
