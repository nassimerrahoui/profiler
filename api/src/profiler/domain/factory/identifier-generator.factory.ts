export interface IdentifierGeneratorFactory {
  generateUUID(): string;
}

export const IdentifierGeneratorFactory = Symbol('IdentifierGeneratorFactory');
