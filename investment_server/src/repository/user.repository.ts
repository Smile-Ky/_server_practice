import { Logger } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

    async findAll(user_id : string){
        try {
            return await this.createQueryBuilder()
            
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async addInvest(){}

}