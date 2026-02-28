import { IsNotEmpty, IsString, IsPhoneNumber, IsDecimal } from 'class-validator';

export class CreateInfluencerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  coupon_code: string;

  @IsNotEmpty()
  @IsDecimal()
  commission_rate: number;
}