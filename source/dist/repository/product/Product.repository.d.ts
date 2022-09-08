import { Repository } from "typeorm";
import { ProductEntity } from "../../entity/product/Product.entity";
export declare class ProductRepository extends Repository<ProductEntity> {
    relationGoodsList(memberId: string, product_list: Array<string>): Promise<any>;
    getProductIcons(productId: string): Promise<any>;
}
