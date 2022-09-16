import { Logger } from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity>{

    async findAll(date : string){
        try {
            return await this.createQueryBuilder('p')
                .where(`'${date} > started_at'`)
                .andWhere(`'${date}' < finished_at'`)
                .leftJoin('investment', 'i', 'p.product_id = i.product_id')
                .select([
                    'product_id',
                    'title',
                    'total_amount',
                    ' as current_amount',
                    'num_users',
                    'investment_state',
                    'started_at',
                    'finished_at'
                ])
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}

//상품 ID, 상품 제목, 총 모집금액, 현재 모집금액, 투자자 수, 투자모집상태(모집중, 모집 완료), 상품 모집기간