import { Test, TestingModule } from '@nestjs/testing';
import { ArmorTypeResolver } from './armor-type.resolver';

describe('ArmorTypeResolver', () => {
  let resolver: ArmorTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmorTypeResolver],
    }).compile();

    resolver = module.get<ArmorTypeResolver>(ArmorTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
