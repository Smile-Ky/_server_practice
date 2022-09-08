/// <reference types="multer-s3" />
import { ReqPlanEventFindDTO } from "./DTO/ReqPlanEventFindDTO";
import { ReqPlanEventFromDTO } from "./DTO/ReqPlanEventFromDTO";
import { PlanEventRepository } from "../../../repository/plan/PlanEvent.repository";
import { PlanEventEntity } from "../../../entity/plan/PlanEvent.entity";
import { PlanEventImageRepository } from "../../../repository/plan/PlanEventImage.repository";
import { PlanEventCommentRepository } from "../../../repository/plan/PlanEventComment.repository";
import { PlanEventToProductRepository } from "../../../repository/plan/PlanEventToProduct.repository";
import { ProductRepository } from "../../../repository/product/Product.repository";
export declare class PlanEventManagerService {
    private planEventRepository;
    private planEventImageRepository;
    private planEventCommentRepository;
    private planEventToProductRepository;
    private productRepository;
    constructor(planEventRepository: PlanEventRepository, planEventImageRepository: PlanEventImageRepository, planEventCommentRepository: PlanEventCommentRepository, planEventToProductRepository: PlanEventToProductRepository, productRepository: ProductRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqPlanEventFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<any>;
    create(data: ReqPlanEventFromDTO): Promise<PlanEventEntity>;
    update(id: string, data: ReqPlanEventFromDTO): Promise<void>;
    delete(id: string): Promise<void>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_id: string;
        image_url: string;
    }>;
}
