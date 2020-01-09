import { Test, TestingModule } from '@nestjs/testing';
import { CapacityResolver } from './capacity.resolver';

describe('CapacityResolver', () => {
  let resolver: CapacityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapacityResolver],
    }).compile();

    resolver = module.get<CapacityResolver>(CapacityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
