import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightRepository } from 'src/respository/flight.repository';
import { updateFlightDto } from './update-flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(FlightRepository) private flightRepository : FlightRepository
  ){}

  async getAllData (departure : string, destination: string, dep_times: string, arr_times: string){
    try{
      return await this.flightRepository.getAllData(departure, destination, dep_times, arr_times);
    }catch(error){
      Logger.error(error)
      throw error
    }
  }

  async findById(uuid: string) {
    try{
      return await this.flightRepository.findById(uuid);
    }catch(error){
      Logger.error(error)
      throw error
    }
  }
  
  async updateFlight(uuid: string, flightBody: updateFlightDto) {
    try{
      return await this.flightRepository.updateFlight(uuid, flightBody);
    }catch(error){
      Logger.error(error)
      throw error
    }
  }
}
