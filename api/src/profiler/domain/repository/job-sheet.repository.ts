import { JobSheet } from 'src/profiler/domain/entity/job-sheet';

export interface JobSheetRepository {
  create({
    jobTitle,
    description,
    requiredSkills,
  }: {
    jobTitle: string;
    description: string;
    requiredSkills: string[];
  }): Promise<JobSheet>;

  findJobSheetByReference(reference: string): Promise<JobSheet>;

  findAll(): Promise<JobSheet[]>;
}

export const JobSheetRepository = Symbol('JobSheetRepository');
