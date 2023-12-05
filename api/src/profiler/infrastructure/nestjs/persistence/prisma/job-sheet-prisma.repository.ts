import { PrismaClient } from '@prisma/client';
import { JobSheetRepository } from 'src/profiler/domain/repository/job-sheet.repository';
import { JobSheet } from 'src/profiler/domain/entity/job-sheet';
import { JobSheetPrismaMapper } from './job-sheet-prisma.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JobSheetPrismaRepository implements JobSheetRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findJobSheetByReference(reference: string): Promise<JobSheet> {
    const jobSheetDB = await this.prisma.jobSheet.findUnique({
      where: {
        reference,
      },
    });

    if (!jobSheetDB) {
      throw new Error(`Job sheet with reference ${reference} not found`);
    }

    return JobSheetPrismaMapper.toDomain(jobSheetDB);
  }

  public async create(jobSheet: JobSheet): Promise<JobSheet> {
    const jobSheetDB = await this.prisma.jobSheet.create({
      data: {
        reference: jobSheet.reference,
        title: jobSheet.jobTitle,
        description: jobSheet.description,
        requiredSkills: jobSheet.requiredSkills,
      },
    });

    return JobSheetPrismaMapper.toDomain(jobSheetDB);
  }

  public async findAll(): Promise<JobSheet[]> {
    const jobSheetsDB = await this.prisma.jobSheet.findMany();

    return jobSheetsDB.map(JobSheetPrismaMapper.toDomain);
  }
}
