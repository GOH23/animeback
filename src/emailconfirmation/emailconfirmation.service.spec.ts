import { Test, TestingModule } from '@nestjs/testing';
import { EmailconfirmationService } from './emailconfirmation.service';

describe('EmailconfirmationService', () => {
  let service: EmailconfirmationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailconfirmationService],
    }).compile();

    service = module.get<EmailconfirmationService>(EmailconfirmationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
