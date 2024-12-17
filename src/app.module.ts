import { Module } from '@nestjs/common';
import { StatesModule } from './states/states.module';
import { BlocksModule } from './blocks/blocks.module';

@Module({
  imports: [StatesModule, BlocksModule, BlocksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
