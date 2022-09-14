import { FlightService } from './flight.service';
import { Response } from 'express';
import { updateFlightDto } from './update-flight.dto';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    getAllData(departure: string, destination: string, dep_times: string, arr_times: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(uuid: string, res: Response): Promise<Response<any, Record<string, any>>>;
    updateFlight(uuid: string, flightBody: updateFlightDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
