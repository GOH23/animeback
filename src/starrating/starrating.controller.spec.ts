import { Test, TestingModule } from '@nestjs/testing';
import { StarratingController } from './starrating.controller';
import { StarratingService } from './starrating.service';

describe('StarratingController', () => {
  let controller: StarratingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarratingController],
      providers: [StarratingService],
    }).compile();

    controller = module.get<StarratingController>(StarratingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
