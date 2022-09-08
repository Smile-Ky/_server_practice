import { BaseEntity } from "typeorm";
import { BannerItemEntity } from "./BannerItem.entity";
export declare class BannerEntity extends BaseEntity {
    banner_id: string;
    banner_point: number;
    banner_name: string;
    is_show: boolean;
    create_date: Date;
    update_date: Date;
    banner_item: BannerItemEntity[];
}
