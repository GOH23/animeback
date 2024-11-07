import { Test, TestingModule } from '@nestjs/testing';
import { StarratingService } from './starrating.service';

describe('StarratingService', () => {
  let service: StarratingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarratingService],
    }).compile();

    service = module.get<StarratingService>(StarratingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
