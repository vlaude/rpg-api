import { Test, TestingModule } from '@nestjs/testing';
import { WeaponTypeResolver } from './weapon-type.resolver';

describe('WeaponTypeResolver', () => {
  let resolver: WeaponTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeaponTypeResolver],
    }).compile();

    resolver = module.get<WeaponTypeResolver>(WeaponTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
