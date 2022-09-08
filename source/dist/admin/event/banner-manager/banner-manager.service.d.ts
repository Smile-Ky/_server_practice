/// <reference types="multer-s3" />
import { BannerRepository } from "../../../repository/banner/Banner.repository";
import { BannerImageRepository } from "../../../repository/banner/BannerImage.repository";
import { BannerItemRepository } from "../../../repository/banner/BannerItem.repository";
import { ReqBannerFindDto } from "./DTO/ReqBannerFind.dto";
import { ReqBannerFromDto } from "./DTO/ReqBannerFrom.dto";
import { BannerEntity } from "../../../entity/banner/Banner.entity";
export declare class BannerManagerService {
    private bannerRepository;
    private bannerImageRepository;
    private bannerItemRepository;
    constructor(bannerRepository: BannerRepository, bannerImageRepository: BannerImageRepository, bannerItemRepository: BannerItemRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(data: ReqBannerFindDto, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<{
        data: {
            banner_item: any;
            banner_id: string;
            banner_point: number;
            banner_name: string;
            is_show: boolean;
            create_date: Date;
            update_date: Date;
        };
    }>;
    create(data: ReqBannerFromDto): Promise<BannerEntity>;
    update(id: string, data: ReqBannerFromDto): Promise<void>;
    delete(id: string): Promise<void>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_id: string;
        image_url: string;
    }>;
}
