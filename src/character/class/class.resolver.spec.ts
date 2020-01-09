import { Test, TestingModule } from '@nestjs/testing';
import { ClassResolver } from './class.resolver';

describe('ClassResolver', () => {
  let resolver: ClassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassResolver],
    }).compile();

    resolver = module.get<ClassResolver>(ClassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
