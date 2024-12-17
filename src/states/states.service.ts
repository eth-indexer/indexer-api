import { Injectable } from '@nestjs/common';

@Injectable()
export class StatesService {
  findAll() {
    return `This action returns all states`;
  }

  findByBlockNumber(blockNumber: number) {
    return `This action returns a #${blockNumber} state`;
  }

  findByBlockHash(blockHash: string) {
    return `This action returns a #${blockHash} state`;
  }
}
