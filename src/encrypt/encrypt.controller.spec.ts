import { Test, TestingModule } from '@nestjs/testing';
import { EncryptController } from './encrypt.controller';
import { EncryptService } from './encrypt.service';

describe('EncryptController', () => {
  let controller: EncryptController;

  const mockEncryptService = {
    encrypt: jest.fn(),
    decrypt: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncryptController],
      providers: [
        {
          provide: EncryptService,
          useValue: mockEncryptService,
        },
      ],
    }).compile();

    controller = module.get<EncryptController>(EncryptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
