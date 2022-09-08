import { Logger } from "@nestjs/common";
import { FlightEntity } from "src/entity/flight.entity";
import { updateFlightDto } from "src/flight/update-flight.dto";
import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { Repository } from "typeorm/repository/Repository";

@EntityRepository(FlightEntity)
export class FlightRepository extends Repository<FlightEntity>{
    
    async getAllData(departure : string, destination: string, dep_times: string, arr_times: string){
        try{
            return await this.createQueryBuilder()
                .select([
                    `uuid`,
                    `departure`,
                    `destination`,
                    `departure_times`,
                    `arrival_times`
             ])
                .andWhere(`destination like '%${destination}%'`)
                .andWhere(`departure like '%${departure}%'`)
                .andWhere(`departure_times like '%${dep_times}%'`)
                .andWhere(`arrival_times like '%${arr_times}%'`)
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
            }
       }

    async findById(uuid: string){
        try{
            return await this.createQueryBuilder()
                .select([
                    `uuid`,
                    `departure`,
                    `destination`,
                    `departure_times`,
                    `arrival_times`
             ])
                .andWhere(`uuid = '${uuid}'`)
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
            }
       }
    
    async updateFlight(uuid: string, flightBody: updateFlightDto){
        try{
            return await this.createQueryBuilder()
                .update('flightList')
                .set({
                    uuid: `${flightBody.uuid}`,
                    departure: `${flightBody.departure}`,
                    destination: `${flightBody.destination}`,
                    departure_times: `${flightBody.departure_times}`,
                    arrival_times: `${flightBody.arrival_times}`
                })
                .where(`uuid = '${uuid}'`)
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
            }
       }
}