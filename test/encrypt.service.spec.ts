import { EncryptService } from '../src/encrypt/encrypt.service';

describe('EncryptService', () => {
  const service = new EncryptService();

  it('should encrypt and decrypt payload', () => {
    const payload = 'hello world';

    const enc = service.encrypt(payload);

    const dec = service.decrypt(enc.data.data1, enc.data.data2);

    expect(dec.data.payload).toBe(payload);
  });
});
