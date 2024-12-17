import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.keyState.findMany();
  }

  async findByBlockNumber(blockNumber: number) {
    if (!blockNumber || blockNumber < 0) {
      throw new NotFoundException('Block not found');
    }

    const block = await this.prisma.block.findFirst({
      where: {
        blockNumber,
      },
      include: {
        keyState: true,
      },
    });

    if (!block) {
      throw new NotFoundException('Block not found');
    }

    return { block: block.blockState, keys: block.keyState.keys };
  }

  async findByBlockHash(blockHash: string) {
    if (!blockHash) {
      throw new NotFoundException('Block not found');
    }

    const block = await this.prisma.block.findFirst({
      where: {
        blockHash,
      },
      include: {
        keyState: true,
      },
    });

    if (!block) {
      throw new NotFoundException('Block not found');
    }

    return { block: block.blockState, keys: block.keyState.keys };
  }
}
