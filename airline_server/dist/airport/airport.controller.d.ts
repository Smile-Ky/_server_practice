import { AirportService } from './airport.service';
import { Response } from 'express';
export declare class AirportController {
    private readonly airportService;
    constructor(airportService: AirportService);
    findAll(query: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
