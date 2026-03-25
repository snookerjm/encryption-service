import { Body, Controller, Post } from '@nestjs/common';
import { EncryptService } from './encrypt.service';
import { EncryptDto } from './dto/encrypt.dto';
import { DecryptDto } from './dto/decrypt.dto';

@Controller()
export class EncryptController {
  constructor(private service: EncryptService) {}

  @Post('/get-encrypt-data')
  encrypt(@Body() body: EncryptDto) {
    return this.service.encrypt(body.payload);
  }

  @Post('/get-decrypt-data')
  decrypt(@Body() body: DecryptDto) {
    return this.service.decrypt(body.data1, body.data2);
  }
}
