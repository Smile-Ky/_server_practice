import { BaseEntity } from "typeorm";
import { BannerItemEntity } from "./BannerItem.entity";
export declare class BannerImageEntity extends BaseEntity {
    banner_image_id: string;
    banner_image_url: string;
    banner_item: BannerItemEntity[];
}
