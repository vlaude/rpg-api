import { Module } from '@nestjs/common';
import { CapacityResolver } from './capacity.resolver';
import { CapacityService } from './capacity.service';

@Module({
  providers: [CapacityResolver, CapacityService]
})
export class CapacityModule {}
