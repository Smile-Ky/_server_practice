import { FlightRepository } from 'src/respository/flight.repository';
import { updateFlightDto } from './update-flight.dto';
export declare class FlightService {
    private flightRepository;
    constructor(flightRepository: FlightRepository);
    getAllData(departure: string, destination: string, dep_times: string, arr_times: string): Promise<any>;
    findById(uuid: string): Promise<any>;
    updateFlight(uuid: string, flightBody: updateFlightDto): Promise<import("typeorm").UpdateResult>;
}
