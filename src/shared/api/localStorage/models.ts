export interface Applicant {
  id: number;
  name: string;
  phone?: string;
  country?: string;
  city?: string;
  timezone?: string;
}

export type ApplicantPreview = Pick<Applicant, 'id' | 'name'>;

// TODO:
// export type ApplicantPreview = Pick<Applicant, 'id' | 'name'> & {
//   order: number;
// };

export interface ColumnData {
  order: number;
  applicants: ApplicantPreview[];
}

export type ColumnKey = string;

export type ColumnsList = Record<ColumnKey, ColumnData>;
