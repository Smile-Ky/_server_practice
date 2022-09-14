import { AirportRepository } from '../respository/airport.repository';
export declare class AirportService {
    private airportRepository;
    constructor(airportRepository: AirportRepository);
    findByChar(query: string): Promise<any>;
}
