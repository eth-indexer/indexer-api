import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BlocksService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const blocks = await this.prisma.block.findMany();

    return blocks.map((block) => ({
      block: block.blockState,
      nonce: block.contractNonce.toString(),
    }));
  }

  async findByBlockNumber(blockNumber: number) {
    const block = await this.prisma.block.findFirst({
      where: {
        blockNumber,
      },
    });

    if (!block) {
      throw new NotFoundException('Block not found');
    }

    return { block: block.blockState, nonce: block.contractNonce.toString() };
  }

  async findByBlockHash(blockHash: string) {
    const block = await this.prisma.block.findFirst({
      where: {
        blockHash,
      },
    });

    if (!block) {
      throw new NotFoundException('Block not found');
    }

    return { block: block.blockState, nonce: block.contractNonce.toString() };
  }
}
