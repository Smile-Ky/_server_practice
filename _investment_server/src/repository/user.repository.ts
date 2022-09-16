import { Logger } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { userInvestDto } from "src/user/DTO/userInvest.dto";


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

    async addInvest(userInvest: userInvestDto){
        try {
            Logger.log('repository')
            return
            
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async getState(product_id: string){
        try {
            return await this.createQueryBuilder()
                .leftJoin('investment', 'i', `'i.product_id = ${product_id}'`)
                .addSelect("SUM(investment)", "current_amount")
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}