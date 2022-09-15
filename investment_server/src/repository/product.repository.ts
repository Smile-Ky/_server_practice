import { Logger } from "@nestjs/common";
import { ProductEntity } from "../entity/product.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity>{

    async findAll(date : string){
        try {
            return await this.createQueryBuilder()
                .select(['*'])
                .where(`'${date} > started_at'`)
                .andWhere(`'${date}' < finished_at'`)
                .execute()
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}