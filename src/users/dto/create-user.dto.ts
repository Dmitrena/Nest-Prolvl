import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Email', description: 'Пошта кориистувача' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'Пароль кориистувача' })
  readonly password: string;
}
