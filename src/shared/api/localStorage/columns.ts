import { COLUMNS_TABLE } from './constants';
import { ApplicantPreview, ColumnsList } from './models';

export const getAllColumns = (): ColumnsList => {
  const localItem = localStorage.getItem(COLUMNS_TABLE);
  return localItem ? JSON.parse(localItem) : {};
};

export const moveApplicant = (
  applicant: ApplicantPreview,
  removeFromColumnKey: string,
  moveToColumnKey: string,
  // applicantOrder: number,
): ColumnsList | null => {
  const localItem = localStorage.getItem(COLUMNS_TABLE);
  const columns: ColumnsList | null = localItem ? JSON.parse(localItem) : null;

  if (!columns) {
    return columns;
  }

  const moveToColumn = columns[moveToColumnKey];
  moveToColumn.applicants.push(applicant);

  const removeFromColumn = columns[removeFromColumnKey];
  const applicantIndex = removeFromColumn.applicants.findIndex(
    (item) => item.id === applicant.id,
  );

  if (applicantIndex === -1) {
    return null;
  }

  removeFromColumn.applicants.splice(applicantIndex, 1);

  columns[removeFromColumnKey] = removeFromColumn;
  columns[moveToColumnKey] = moveToColumn;

  localStorage.setItem(COLUMNS_TABLE, JSON.stringify(columns));

  return columns;
};

export const addColumnApplicant = (
  applicant: ApplicantPreview,
  columnKey: string,
): ColumnsList => {
  const localItem = localStorage.getItem(COLUMNS_TABLE);
  const columns: ColumnsList = localItem ? JSON.parse(localItem) : null;

  if (!columns) {
    return columns;
  }

  columns[columnKey].applicants.push(applicant);

  localStorage.setItem(COLUMNS_TABLE, JSON.stringify(columns));

  return columns;
};

export const addColumn = (key: string): ColumnsList | null => {
  const localItem = localStorage.getItem(COLUMNS_TABLE);
  const columns: ColumnsList = localItem ? JSON.parse(localItem) : {};

  if (columns[key]) {
    return null;
  }

  columns[key] = {
    order: Object.keys(columns).length + 1,
    applicants: [],
  };

  localStorage.setItem(COLUMNS_TABLE, JSON.stringify(columns));

  return columns;
};
// TODO:
export const deleteColumn = () => {};
// TODO:
export const editColumn = () => {};
// TODO:
export const getColumn = () => {};
