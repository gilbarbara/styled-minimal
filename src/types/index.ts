import { BaseProps } from './system';

export * from './common';
export * from './components';
export * from './system';
export * from './theme';

export interface CommonProps extends BaseProps {
  block?: boolean;
  dark?: boolean;
  disabled?: boolean;
  fullScreen?: boolean;
  invert?: boolean;
  loading?: boolean;
  multiple?: boolean;
  type?: string;
  valid?: boolean;
  size?: string;
  variant?: string;
}
