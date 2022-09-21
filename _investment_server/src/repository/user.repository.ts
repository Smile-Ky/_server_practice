import { Logger } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { userInvestDto } from "src/user/DTO/userInvest.dto";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

    async addInvest(userInvest: userInvestDto){
        try {
            const invest = await this.createQueryBuilder()
                .insert()
                .into('investment')
                .values([
                    { 
                        user_id: `${userInvest.user_id}`,
                        product_id: `${userInvest.product_id}`,
                        investment: `${userInvest.investment}`
                    }
                ])
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
    
    async addHistory(userInvest: userInvestDto){
        try {
            return
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async getHistory(user_id: number){
        try {

            return
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}
