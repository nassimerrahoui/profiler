import { JobSheetDraft } from 'src/profiler/domain/entity/job-sheet';
import { CreateJobSheetDto } from 'src/profiler/infrastructure/nestjs/controller/create-job-sheet.dto';

export class JobSheetDtoMapper {
  public static toDraft(createJobSheetDto: CreateJobSheetDto): JobSheetDraft {
    return {
      jobTitle: createJobSheetDto.jobTitle,
      description: createJobSheetDto.description,
      requiredSkills: createJobSheetDto.requiredSkills,
    };
  }
}
