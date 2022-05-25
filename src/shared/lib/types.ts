import React from 'react';

export interface MenuAction<T> {
  name: string;
  element: (item: T) => React.ReactNode;
}

export type MenuActionsList<T> = MenuAction<T>[];
