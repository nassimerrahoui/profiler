import { PrismaClient } from '@prisma/client';
import { ProfileRepository } from 'src/profiler/domain/repository/profile.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilePrismaRepository implements ProfileRepository {
  constructor(private readonly prisma: PrismaClient) {}
}
