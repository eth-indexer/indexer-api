import { Module } from '@nestjs/common';
import { StatesModule } from './states/states.module';

@Module({
  imports: [StatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
