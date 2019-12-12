import { Test, TestingModule } from '@nestjs/testing';
import { ArmorTypeService } from './armor-type.service';

describe('ArmorTypeService', () => {
  let service: ArmorTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmorTypeService],
    }).compile();

    service = module.get<ArmorTypeService>(ArmorTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
