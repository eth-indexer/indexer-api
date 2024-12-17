import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BlocksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.block.findMany();
  }

  findByBlockNumber(blockNumber: number) {
    return this.prisma.block.findFirst({
      where: {
        blockNumber,
      },
    });
  }

  findByBlockHash(blockHash: string) {
    return this.prisma.block.findFirst({
      where: {
        blockHash,
      },
    });
  }
}
