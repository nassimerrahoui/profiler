import { Module } from '@nestjs/common';
import { JobSheetApplication } from 'src/profiler/application/job-sheet.application';
import { JobSheetRepository } from 'src/profiler/domain/repository/job-sheet.repository';
import { ProfileRepository } from 'src/profiler/domain/repository/profile.repository';
import { IdentifierGeneratorFactory } from 'src/profiler/domain/factory/identifier-generator.factory';
import { ProfilerController } from 'src/profiler/infrastructure/nestjs/controller/profiler.controller';
import { JobSheetPrismaRepository } from 'src/profiler/infrastructure/nestjs/persistence/prisma/job-sheet-prisma.repository';
import { IdentifierGeneratorUUIDFactory } from 'src/profiler/infrastructure/nestjs/factory/identifier-generator-uuid.factory';
import { PrismaClient } from '@prisma/client';
import { ProfilePrismaRepository } from 'src/profiler/infrastructure/nestjs/persistence/prisma/profile-prisma.repository';

@Module({
  controllers: [ProfilerController],
  providers: [
    {
      provide: JobSheetApplication,
      useFactory: (
        jobSheetRepository: JobSheetRepository,
        identifierGeneratorFactory: IdentifierGeneratorFactory,
      ) => {
        return new JobSheetApplication(
          jobSheetRepository,
          identifierGeneratorFactory,
        );
      },
      inject: [JobSheetRepository, IdentifierGeneratorFactory],
    },
    {
      provide: ProfileRepository,
      useFactory: (prismaClient: PrismaClient) => {
        return new ProfilePrismaRepository(prismaClient);
      },
      inject: [PrismaClient],
    },
    {
      provide: JobSheetRepository,
      useFactory: (prismaClient: PrismaClient) => {
        return new JobSheetPrismaRepository(prismaClient);
      },
      inject: [PrismaClient],
    },
    {
      provide: IdentifierGeneratorFactory,
      useClass: IdentifierGeneratorUUIDFactory,
    },
    {
      provide: PrismaClient,
      useClass: PrismaClient,
    },
  ],
})
export class ProfilerModule {}
