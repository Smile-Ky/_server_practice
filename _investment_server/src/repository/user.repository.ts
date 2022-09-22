import { Logger } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { userInvestDto } from "src/user/DTO/userInvest.dto";
import { HistoryEntity } from "src/entity/history.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

    async addInvest(userInvest: userInvestDto){
        try {
            await this.createQueryBuilder()
                .insert()
                .into('investment')
                .values([
                    { 
                        user: `${userInvest.user_id}`,
                        product: `${userInvest.product_id}`,
                        investment: `${userInvest.investment}`
                    }
                ])
                .execute()
            
            const history = new HistoryEntity()
            
            const p_title = await getRepository('product')
                .createQueryBuilder()
                .select(['title'])
                .where('product_id = :pid', {pid: userInvest.product_id})
                .execute()

            history.title = p_title[0].title
            history.invest = userInvest.investment
            history.date = new Date()
            history.user_id = userInvest.user_id
            history.product_id = userInvest.product_id
            await getRepository('history').save(history)

            await getRepository('history')
                .createQueryBuilder()
                .update()
                .set({
                    current_state: true
                })
                .where("user_id = :uid", {uid: userInvest.user_id})
                .andWhere("product_id = :pid", {pid: userInvest.product_id})
                .execute()

            return
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async getHistory(user_id: number){
        try {
            return await getRepository('history')
                .createQueryBuilder('h')
                .select([
                    'h.date as "투자일"',
                    'h.title as "투자 종목명"',
                    'h.invest as "투자 금액"',
                    'h.current_state as "현재 투자 여부"'
                ])
                .where('h.user_id = :uid', {uid: user_id})
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}