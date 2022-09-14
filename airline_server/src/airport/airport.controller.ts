import { Controller, Get, Query, Res, Logger} from '@nestjs/common';
import { AirportService } from './airport.service';
import { Response } from 'express';

@Controller('airport')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}
  
  @Get()
  async findAll(@Query('query') query: string,
                @Res() res: Response) {
    try{
        if(query === undefined)
          query = ""
        return res.status(200).json(
          await this.airportService.findByChar(query)
        )
    }
    catch(error){
      Logger.error(error)
      return res.status(500).json(error);
    }
  }
}
