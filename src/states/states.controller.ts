import { Controller, Get, Query } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('keys')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  async getState(
    @Query('blockNumber') blockNumber?: string,
    @Query('blockHash') blockHash?: string,
  ) {
    if (!blockNumber && !blockHash) {
      return this.statesService.findAll();
    }

    if (blockNumber) {
      return this.statesService.findByBlockNumber(+blockNumber);
    }

    if (blockHash) {
      return this.statesService.findByBlockHash(blockHash);
    }
  }
}
