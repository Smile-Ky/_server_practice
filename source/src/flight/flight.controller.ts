import { Controller, Get, Put, Res, Logger, Query, Param, Body } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Response } from 'express'
import { updateFlightDto } from './update-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}
  
  @Get()
  async getAllData(@Query('departure') departure: string,
                  @Query('destination') destination: string,
                  @Query('departure_times') dep_times: string,
                  @Query('arrival_times') arr_times: string,
                  @Res() res: Response) {
    try{
      if(departure === undefined)
        departure = ""
      if(destination === undefined)
        destination = ""
      if(dep_times === undefined)
        dep_times = ""
      if(arr_times === undefined)
        arr_times = ""
      return res.status(200).json(
      await this.flightService.getAllData(departure, destination, dep_times, arr_times)
    )}
    catch(error){
      Logger.error(error)
      return res.status(500).json(error);
    }
  }

  @Get('/:id')
  async findById(@Param('id') uuid: string ,
                  @Res() res: Response){
    try{
        return res.status(200).json(
          await this.flightService.findById(uuid)
        )
    }catch(error){
      Logger.error(error)
      return res.status(500).json(error)
    }
  }

  @Put('/:id')
  async updateFlight(@Param('id') uuid: string,
                    @Body() flightBody: updateFlightDto,
                    @Res() res: Response){
    try{
        await this.flightService.updateFlight(uuid, flightBody)
        return res.status(200).json(
          await this.flightService.getAllData(flightBody.departure, flightBody.destination, flightBody.departure_times, flightBody.arrival_times)
        )
    }catch(error){
      Logger.error(error)
      return res.status(500).json(error)
    }
  }
}
