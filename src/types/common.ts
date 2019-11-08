import * as React from 'react';

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type InputTypes =
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text';
export type Sizes = 'sm' | 'md' | 'lg';
export type SizesAll = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface PlainObject {
  [key: string]: any;
}

export type NumberOrString = number | string;

export type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R>
    ? Array<RecursivePartial<R>>
    : RecursivePartial<T[K]>;
};

export type ComponentProps<T, P> = Omit<Omit<React.HTMLProps<T>, 'size'>, keyof P>;
