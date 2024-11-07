import { Test, TestingModule } from '@nestjs/testing';
import { EmailconfirmationController } from './emailconfirmation.controller';
import { EmailconfirmationService } from './emailconfirmation.service';

describe('EmailconfirmationController', () => {
  let controller: EmailconfirmationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailconfirmationController],
      providers: [EmailconfirmationService],
    }).compile();

    controller = module.get<EmailconfirmationController>(EmailconfirmationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
