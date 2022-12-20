import React from 'react';

type DefaultProps = Record<string, never>;

export type OptionalChild<T = React.ReactNode> = { children?: T };
export type RequiredChild<T = React.ReactNode> = Required<OptionalChild<T>>;

export type Props<P = DefaultProps> = {
  [K in keyof P]: P[K];
};

// Typing with React.FC always opens components to take children, which is not always wanted.

/**
 * Component with no children.
 */
export type FC<P = DefaultProps> = (props: P) => React.ReactElement | null;

/**
 * Component with optional children.
 */
export type FCC<P = DefaultProps, C = React.ReactNode> = (
  props: Props<P> & OptionalChild<C>
) => React.ReactElement | null;

/**
 * Component with required children.
 */
export type FCR<P = DefaultProps, C = React.ReactNode> = (
  props: Props<P> & RequiredChild<C>
) => React.ReactElement | null;
