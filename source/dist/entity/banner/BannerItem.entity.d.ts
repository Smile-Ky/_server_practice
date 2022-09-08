import { BaseEntity } from "typeorm";
import { BannerImageEntity } from "./BannerImage.entity";
import { BannerEntity } from "./Banner.entity";
export declare class BannerItemEntity extends BaseEntity {
    banner_item_id: string;
    title: string;
    link_url: string;
    sequence: number;
    is_use_date: boolean;
    start_date: Date;
    end_date: Date;
    banner_id: BannerEntity;
    banner_image_id: BannerImageEntity;
}
