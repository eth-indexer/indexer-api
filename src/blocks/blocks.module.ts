import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BlocksController],
  providers: [BlocksService, PrismaService],
})
export class BlocksModule {}
