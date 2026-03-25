import { IsString, Length } from 'class-validator';

export class EncryptDto {
  @IsString()
  @Length(0, 2000)
  payload: string;
}
