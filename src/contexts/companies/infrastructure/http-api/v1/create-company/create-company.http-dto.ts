import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCompanyHttpDto {
  @IsOptional()
  @IsString()
  chainNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  fiscalId?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  totalTxs?: number;

  @IsOptional()
  @IsNumber()
  availableTxs?: number;

  @IsOptional()
  @IsString()
  taxIDNumber?: string;

  @IsOptional()
  @IsString()
  contactName?: string;

  @IsOptional()
  @IsString()
  contactNumber?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsBoolean()
  isDarwin!: boolean;

  // Settings
  @IsOptional()
  @IsString()
  wallet?: string;

  @IsOptional()
  @IsNumber()
  cityId?: number;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  detailLocation?: string;

  @IsOptional()
  @IsString()
  zipCode?: string;

  @IsOptional()
  @IsNumber()
  timeZoneId?: number;
}
