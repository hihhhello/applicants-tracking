export interface MenuAction<T> {
  name: string;
  onClick: (item: T) => void;
}

export type MenuActionsList<T> = MenuAction<T>[];
