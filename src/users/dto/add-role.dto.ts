import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Повино бути string' })
  readonly value: string;
  @IsNumber({}, { message: 'Повино бути число' })
  readonly userId: string;
}
