import { JobSheet } from 'src/profiler/domain/entity/job-sheet';
import { JobSheet as JobSheetDB } from '@prisma/client';

export class JobSheetPrismaMapper {
  public static toDomain(jobSheetDB: JobSheetDB): JobSheet {
    return new JobSheet({
      reference: jobSheetDB.reference,
      jobTitle: jobSheetDB.title,
      description: jobSheetDB.description,
      requiredSkills: jobSheetDB.requiredSkills,
    });
  }
}
