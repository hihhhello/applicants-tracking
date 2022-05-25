import { Applicant } from './models';

export type AddApplicantInput = Omit<Applicant, 'id'>;
