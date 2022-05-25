import { ApplicantPreview } from 'shared/api';

export interface MenuAction {
  name: string;
  onClick: (rowData: ApplicantPreview) => void;
}

export type MenuActionsList = MenuAction[];
