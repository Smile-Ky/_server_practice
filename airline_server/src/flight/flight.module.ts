import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { FlightRepository } from 'src/respository/flight.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FlightRepository])],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
