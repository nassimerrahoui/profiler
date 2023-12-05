import { JobSheetRepository } from 'src/profiler/domain/repository/job-sheet.repository';
import { JobSheet, JobSheetDraft } from 'src/profiler/domain/entity/job-sheet';
import { IdentifierGeneratorFactory } from 'src/profiler/domain/factory/identifier-generator.factory';

export class JobSheetApplication {
  constructor(
    private readonly jobSheetRepository: JobSheetRepository,
    private readonly identifierGeneratorFactory: IdentifierGeneratorFactory,
  ) {}

  async createJobSheet(jobSheetDraft: JobSheetDraft) {
    const jobSheetToCreate = new JobSheet({
      reference: this.identifierGeneratorFactory.generateUUID(),
      jobTitle: jobSheetDraft.jobTitle,
      description: jobSheetDraft.description,
      requiredSkills: jobSheetDraft.requiredSkills,
    });
    const jobSheet = await this.jobSheetRepository.create(jobSheetToCreate);

    return jobSheet.reference;
  }

  async getJobSheet(jobSheetReference: string): Promise<JobSheet> {
    return this.jobSheetRepository.findJobSheetByReference(jobSheetReference);
  }

  async getAllJobSheets(): Promise<JobSheet[]> {
    return this.jobSheetRepository.findAll();
  }
}
