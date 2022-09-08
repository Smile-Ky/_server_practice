import { Repository } from "typeorm";
import { ProductClassEntity } from "../../entity/product/ProductClass.entity";
export declare class ProductClassRepository extends Repository<ProductClassEntity> {
    getClassTree(): Promise<any[]>;
    getClassFullText(id: string): Promise<string>;
    getTopClass(id: string): Promise<{
        depth: number;
        top_end_class: any;
    }>;
    getClassNameList(id: string): Promise<{
        cid: any[];
        result: any[];
        data: string;
    }>;
    getSubClassAll(cid: string): Promise<{
        data: any;
        list: any[];
    }>;
}
