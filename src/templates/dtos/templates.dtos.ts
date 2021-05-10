import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'template de documento' })
  readonly html: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly appName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly available: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly templatePather: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly version: string;

  @IsDate()
  @ApiProperty()
  @IsOptional()
  create: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userCreated: string;

  @IsDate()
  @ApiProperty()
  @IsOptional()
  Update: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  userUpdate: string;
}

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {}
