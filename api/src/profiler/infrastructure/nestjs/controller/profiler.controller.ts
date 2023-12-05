import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobSheetApplication } from 'src/profiler/application/job-sheet.application';
import { CreateJobSheetDto } from 'src/profiler/infrastructure/nestjs/controller/create-job-sheet.dto';
import { JobSheetDtoMapper } from 'src/profiler/infrastructure/nestjs/controller/job-sheet-dto.mapper';

@Controller('profiler')
export class ProfilerController {
  constructor(private readonly jobSheetApplication: JobSheetApplication) {}

  @Post('job-sheets')
  async createJobSheet(@Body() body: CreateJobSheetDto) {
    const jobSheetDraft = JobSheetDtoMapper.toDraft(body);
    return this.jobSheetApplication.createJobSheet(jobSheetDraft);
  }

  @Get('job-sheets')
  async getAllJobSheets() {
    return this.jobSheetApplication.getAllJobSheets();
  }
}
