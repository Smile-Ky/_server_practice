import { AirportEntity } from "../entity/airport.entity";
import { Repository } from "typeorm";
export declare class AirportRepository extends Repository<AirportEntity> {
    findByChar(query: string): Promise<any>;
}
