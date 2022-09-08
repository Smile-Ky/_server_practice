import { BaseEntity } from "typeorm";
export declare class FlightEntity extends BaseEntity {
    uuid: string;
    departure: string;
    destination: string;
    departure_times: string;
    arrival_times: string;
}
