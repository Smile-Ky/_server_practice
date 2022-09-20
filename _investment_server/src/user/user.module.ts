import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { ProductRepository } from 'src/repository/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, ProductRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
