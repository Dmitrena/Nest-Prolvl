import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Email', description: 'Пошта кориистувача' })
  @IsString({ message: 'Повино бути string' })
  @IsEmail({}, { message: 'Некоректний email' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'Пароль кориистувача' })
  @IsString({ message: 'Повино бути string' })
  @Length(4, 16, { message: 'Не менше 4 і не більше 16 символів' })
  readonly password: string;
}
