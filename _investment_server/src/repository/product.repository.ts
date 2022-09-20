import { Logger } from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";


@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity>{

    async findAll(date : Date){
        try {
            return await this.createQueryBuilder('p')
                .leftJoin('investment', 'i', 'p.product_id = i.product_id')
                .where(':date > started_at', { date: date })
                .andWhere(':date < finished_at', { date: date })
                .groupBy('p.product_id')
                .select([
                    'p.product_id as "상품 ID"',
                    'p.title as "상품 제목"',
                    'p.total_amount as "총 모집금액"',
                    'sum(i.investment) as "현재 모집금액"',
                    'p.started_at as 시작일',
                    'p.finished_at as 마감일'
                ])
                .addSelect('count(distinct(i.user_id))', "투자자 수")
                .addSelect(`CASE
                WHEN p.total_amount > sum(i.investment) || sum(i.investment) is null THEN "모집중"
                else "모집 완료"
                END`, "투자모집상태")
                .execute()

        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async getInvest(product_id: number){
        try {
            return await this.createQueryBuilder('p')
                .leftJoin('investment', 'i', 'i.product_id = p.product_id')
                .where(`p.product_id = :pid`, {pid : product_id})
                .groupBy('p.product_id')
                .select(['p.total_amount', 
                         'sum(i.investment) as current_amount'])
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async getUser(user_id: number){
        try {
            return await this.createQueryBuilder('p')
            .leftJoin('investment', 'i', 'i.product_id = p.product_id')
            .select(['p.product_id as 상품ID', 
                     'p.title as "상품 제목"', 
                     'p.total_amount as "총 모집금액"', 
                     'i.investment as "나의 투자금액"', 
                     'i.date as 투자일시'])
            .where('i.user_id = :uid', {uid: user_id})
            .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}