import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { InvestmentEntity } from "src/entity/investment.entity";

@EntityRepository(InvestmentEntity)
export class InvestmentRepository extends Repository<InvestmentEntity>{

    async deleteInvest(user_id: number, product_id: number){
        try {
            return await this.createQueryBuilder('i')
                .delete()
                .where("user_id = :uid", {uid: user_id})
                .andWhere("product_id = :pid", {pid: product_id})
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    
}