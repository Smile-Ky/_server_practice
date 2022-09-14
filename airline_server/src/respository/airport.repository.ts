import { Logger } from "@nestjs/common";
import { AirportEntity } from "../entity/airport.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(AirportEntity)
export class AirportRepository extends Repository<AirportEntity>{

    async findByChar(query: string){
        try{
            return await this.createQueryBuilder()
                .select([
                    `name`,
                    `code`
             ])
                .andWhere(`code like '%${query.toUpperCase()}%'`)
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
            }
       }
    }

    