import { ProfileRepository } from 'src/profiler/domain/repository/profile.repository';
import { IdentifierGeneratorFactory } from 'src/profiler/domain/factory/identifier-generator.factory';

export class ProfileApplication {
  constructor(
    private readonly profileRepository: ProfileRepository,
    private readonly identifierGeneratorFactory: IdentifierGeneratorFactory,
  ) {}
}
