import { Test, TestingModule } from '@nestjs/testing';
import { ArmorResolver } from './armor.resolver';

describe('ArmorResolver', () => {
  let resolver: ArmorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmorResolver],
    }).compile();

    resolver = module.get<ArmorResolver>(ArmorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
