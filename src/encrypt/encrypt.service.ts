import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';

@Injectable()
export class EncryptService {
  private privateKey: string = fs.readFileSync('keys/private.key', 'utf8');
  private publicKey: string = fs.readFileSync('keys/public.key', 'utf8');

  generateAESKey(): Buffer {
    return crypto.randomBytes(32);
  }

  encryptAES(data: string, key: Buffer): string {
    const iv: Buffer = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    let encrypted: string = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return iv.toString('base64') + ':' + encrypted;
  }

  decryptAES(data: string, key: Buffer): string {
    const parts: string[] = data.split(':');

    const iv: Buffer = Buffer.from(parts[0], 'base64');
    const encrypted: string = parts[1];

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    let decrypted: string = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  encryptRSA(data: string): string {
    return crypto
      .privateEncrypt(this.privateKey, Buffer.from(data))
      .toString('base64');
  }

  decryptRSA(data: string): string {
    return crypto
      .publicDecrypt(this.publicKey, Buffer.from(data, 'base64'))
      .toString();
  }

  encrypt(payload: string): {
    successful: boolean;
    error_code: string;
    data: { data1: string; data2: string };
  } {
    const aesKey: Buffer = this.generateAESKey();

    const data2: string = this.encryptAES(payload, aesKey);
    const data1: string = this.encryptRSA(aesKey.toString('base64'));

    return {
      successful: true,
      error_code: '',
      data: {
        data1,
        data2,
      },
    };
  }

  decrypt(
    data1: string,
    data2: string,
  ): {
    successful: boolean;
    error_code: string;
    data: { payload: string };
  } {
    const aesKey: Buffer = Buffer.from(this.decryptRSA(data1), 'base64');
    const payload: string = this.decryptAES(data2, aesKey);

    return {
      successful: true,
      error_code: '',
      data: {
        payload,
      },
    };
  }
}
