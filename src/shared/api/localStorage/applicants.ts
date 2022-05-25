import { APPLICANTS_TABLE } from './constants';
import { Applicant } from './models';
import { AddApplicantInput } from './types';

export const addApplicant = (data: AddApplicantInput): Applicant => {
  const localItem = localStorage.getItem(APPLICANTS_TABLE);
  const applicants: Applicant[] = localItem ? JSON.parse(localItem) : [];

  const newApplicant: Applicant = {
    id: Date.now(),
    ...data,
  };

  applicants.push(newApplicant);
  localStorage.setItem(APPLICANTS_TABLE, JSON.stringify(applicants));
  return newApplicant;
};

/**
 *
 * @param id
 * @returns Deleted applicant data or null if no such record
 */
export const deleteApplicant = (id: number): Applicant | null => {
  const localItem = localStorage.getItem(APPLICANTS_TABLE);
  const applicants: Applicant[] = localItem ? JSON.parse(localItem) : [];

  if (!applicants.length) {
    return null;
  }

  let applicant: Applicant | null = null;
  let applicantIndex = -1;
  for (let i = 0; i < applicants.length; i++) {
    if (applicants[i].id === id) {
      applicant = applicants[i];
      applicantIndex = i;
      break;
    }
  }

  if (!applicant) {
    return applicant;
  }

  applicants.splice(applicantIndex, 1);

  localStorage.setItem(APPLICANTS_TABLE, JSON.stringify(applicants));

  return applicant;
};
export const editApplicant = () => {};
export const getApplicant = () => {};
