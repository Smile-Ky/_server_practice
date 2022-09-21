import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { ProductRepository } from 'src/repository/product.repository';
import { InvestmentRepository } from 'src/repository/investment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, ProductRepository, InvestmentRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
