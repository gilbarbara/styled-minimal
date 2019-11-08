import * as React from 'react';
import * as StyledSystem from 'styled-system';
import * as StyledSystemCSS from '@styled-system/css';
import * as CSS from 'csstype';

import { Theme } from './theme';

export type ResponsiveSizes = '_' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

export type ResponsiveObject = {
  [key: string]: CSSProps;
};

export interface OutlineProps {
  outline?: string;
  outlineColor?: string;
  outlineOffset?: number | string;
  outlineStyle?: string;
  outlineWidth?: number | string;
}

interface StyledSystemProps<T extends StyledSystem.Theme = StyledSystem.RequiredTheme>
  extends StyledSystem.BackgroundImageProps,
    // BackgroundProps
    StyledSystem.BackgroundPositionProps,
    StyledSystem.BackgroundRepeatProps,
    StyledSystem.BackgroundSizeProps,
    // BorderProps
    StyledSystem.BorderBottomProps,
    StyledSystem.BorderColorProps,
    StyledSystem.BorderLeftProps,
    StyledSystem.BorderRadiusProps,
    StyledSystem.BorderRightProps,
    StyledSystem.BorderStyleProps,
    StyledSystem.BorderTopProps,
    StyledSystem.BorderWidthProps,
    // ColorProps
    StyledSystem.BackgroundColorProps,
    StyledSystem.OpacityProps,
    // Flexbox
    StyledSystem.AlignContentProps,
    StyledSystem.AlignItemsProps,
    StyledSystem.AlignSelfProps,
    StyledSystem.FlexBasisProps,
    StyledSystem.FlexDirectionProps,
    StyledSystem.FlexGrowProps,
    StyledSystem.FlexProps,
    StyledSystem.FlexShrinkProps,
    StyledSystem.FlexWrapProps,
    StyledSystem.JustifyContentProps,
    StyledSystem.JustifyItemsProps,
    StyledSystem.JustifySelfProps,
    StyledSystem.OrderProps,
    // Grid
    StyledSystem.GridGapProps,
    StyledSystem.GridColumnGapProps,
    StyledSystem.GridRowGapProps,
    StyledSystem.GridColumnProps,
    StyledSystem.GridRowProps,
    StyledSystem.GridAutoFlowProps,
    StyledSystem.GridAutoColumnsProps,
    StyledSystem.GridAutoRowsProps,
    StyledSystem.GridTemplateColumnsProps,
    StyledSystem.GridTemplateRowsProps,
    StyledSystem.GridTemplateAreasProps,
    StyledSystem.GridAreaProps,
    // LayoutProps
    StyledSystem.DisplayProps,
    StyledSystem.HeightProps,
    StyledSystem.MaxHeightProps,
    StyledSystem.MaxWidthProps,
    StyledSystem.MinHeightProps,
    StyledSystem.MinWidthProps,
    StyledSystem.OverflowProps,
    StyledSystem.VerticalAlignProps,
    StyledSystem.WidthProps,
    // PositionProps
    StyledSystem.BottomProps,
    StyledSystem.LeftProps,
    StyledSystem.RightProps,
    StyledSystem.TopProps,
    StyledSystem.ZIndexProps,
    StyledSystem.SpaceProps,
    // TypographyProps
    StyledSystem.FontFamilyProps,
    StyledSystem.FontSizeProps,
    StyledSystem.FontStyleProps,
    StyledSystem.FontWeightProps,
    StyledSystem.LetterSpacingProps,
    StyledSystem.LineHeightProps,
    StyledSystem.TextAlignProps,
    StyledSystem.ShadowProps,
    OutlineProps {
  background?: StyledSystem.ResponsiveValue<CSS.BackgroundProperty<T>>;
  border?: StyledSystem.ResponsiveValue<CSS.BorderProperty<T>>;
  borderX?: StyledSystem.ResponsiveValue<CSS.BorderProperty<T>>;
  borderY?: StyledSystem.ResponsiveValue<CSS.BorderProperty<T>>;
  position?: StyledSystem.ResponsiveValue<CSS.PositionProperty>;
  textColor?: StyledSystem.ResponsiveValue<CSS.ColorProperty>;
}

export type CSSProps =
  | StyledSystemCSS.SystemStyleObject
  | Record<
      string,
      | StyledSystemCSS.SystemStyleObject
      | StyledSystemCSS.ResponsiveStyleValue<number | string>
      | Record<
          string,
          StyledSystemCSS.SystemStyleObject | StyledSystemCSS.ResponsiveStyleValue<number | string>
        >
    >;

export interface BaseProps extends React.RefAttributes<any>, StyledSystemProps {
  as?: React.ElementType;
  css?: CSSProps;
  cursor?: string;
  filter?: string;
  responsive?: ResponsiveObject;
  textDecoration?: string;
  textTransform?:
    | 'capitalize'
    | 'full-size-kana'
    | 'full-width'
    | 'inherit'
    | 'initial'
    | 'lowercase'
    | 'none'
    | 'unset'
    | 'uppercase';
  theme?: Theme;
}
