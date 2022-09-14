import { Injectable, Logger} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AirportRepository } from '../respository/airport.repository';

@Injectable()
export class AirportService {

  constructor(
    @InjectRepository(AirportRepository) private airportRepository : AirportRepository
  ){}
  
  async findByChar(query: string) {
    try{
      return await this.airportRepository.findByChar(query);
    }catch(error){
      Logger.error(error)
      throw error
    }
  }
}
