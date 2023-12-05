import { Module } from '@nestjs/common';
import { ProfilerModule } from './profiler/infrastructure/nestjs/profiler.module';

@Module({
  imports: [ProfilerModule],
})
export class AppModule {}
