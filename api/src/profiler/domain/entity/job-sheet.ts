export type JobSheetDraft = {
  jobTitle: string;
  description: string;
  requiredSkills?: string[];
};

export class JobSheet {
  private static readonly uuidV4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

  readonly reference: string;
  readonly jobTitle: string;
  readonly description: string;
  readonly requiredSkills: string[];

  constructor({
    reference,
    jobTitle,
    description,
    requiredSkills,
  }: {
    reference: string;
    jobTitle: string;
    description: string;
    requiredSkills?: string[];
  }) {
    this.validateReference(reference);

    this.reference = reference;
    this.jobTitle = jobTitle;
    this.description = description;
    this.requiredSkills = requiredSkills ?? [];
  }

  private validateReference(reference: string) {
    if (!reference.match(JobSheet.uuidV4Regex)) {
      throw new Error('Invalid job sheet reference');
    }
  }
}
