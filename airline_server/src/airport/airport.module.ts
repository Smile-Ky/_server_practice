import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportRepository } from '../respository/airport.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AirportRepository])],
  controllers: [AirportController],
  providers: [AirportService]
})
export class AirportModule {}
