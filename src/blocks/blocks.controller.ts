import { Controller, Get, Query } from '@nestjs/common';
import { BlocksService } from './blocks.service';

@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get()
  async getState(
    @Query('blockNumber') blockNumber?: string,
    @Query('blockHash') blockHash?: string,
  ) {
    if (!blockNumber && !blockHash) {
      return this.blocksService.findAll();
    }

    if (blockNumber) {
      return this.blocksService.findByBlockNumber(+blockNumber);
    }

    if (blockHash) {
      return this.blocksService.findByBlockHash(blockHash);
    }
  }
}
