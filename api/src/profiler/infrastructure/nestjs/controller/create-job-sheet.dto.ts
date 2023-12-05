import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateJobSheetDto {
  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString({ each: true })
  requiredSkills: string[];
}
