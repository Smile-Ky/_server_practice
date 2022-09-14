import { FlightEntity } from "src/entity/flight.entity";
import { updateFlightDto } from "src/flight/update-flight.dto";
import { Repository } from "typeorm/repository/Repository";
export declare class FlightRepository extends Repository<FlightEntity> {
    getAllData(departure: string, destination: string, dep_times: string, arr_times: string): Promise<any>;
    findById(uuid: string): Promise<any>;
    updateFlight(uuid: string, flightBody: updateFlightDto): Promise<import("typeorm").UpdateResult>;
}
