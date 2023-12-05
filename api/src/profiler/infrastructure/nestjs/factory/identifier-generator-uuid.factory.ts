import { IdentifierGeneratorFactory } from 'src/profiler/domain/factory/identifier-generator.factory';
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentifierGeneratorUUIDFactory
  implements IdentifierGeneratorFactory
{
  generateUUID(): string {
    return uuidv4();
  }
}
