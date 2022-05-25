import { localApi } from 'shared/api';

export const addNewApplicant = (name: string, columnKey: string) => {
  const applicant = localApi.addApplicant({ name });
  localApi.addColumnApplicant(applicant, columnKey);
  return applicant;
};
