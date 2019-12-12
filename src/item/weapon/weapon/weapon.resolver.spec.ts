import { Test, TestingModule } from '@nestjs/testing';
import { WeaponResolver } from './weapon.resolver';

describe('WeaponResolver', () => {
  let resolver: WeaponResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeaponResolver],
    }).compile();

    resolver = module.get<WeaponResolver>(WeaponResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
