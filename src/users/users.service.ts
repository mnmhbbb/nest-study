import { Injectable } from '@nestjs/common';
import { UsersModel } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly UsersRepository: Repository<UsersModel>,
  ) {}

  async createUser(nickname: string, email: string, password: string) {
    const user = await this.UsersRepository.create({
      nickname,
      email,
      password,
    });

    const newUser = await this.UsersRepository.save(user);

    return newUser;
  }
}