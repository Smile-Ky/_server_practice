import { NoticeRepository } from "../../../repository/main/Notice.repository";
import { ReqNoticeFromDto } from "./DTO/ReqNoticeFrom.dto";
import { NoticeEntity } from "../../../entity/main/Notice.entity";
export declare class NoticeService {
    private noticeRepository;
    constructor(noticeRepository: NoticeRepository);
    find(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<NoticeEntity>;
    create(data: ReqNoticeFromDto): Promise<NoticeEntity>;
    update(id: string, data: ReqNoticeFromDto): Promise<void>;
    delete(id: string): Promise<void>;
}
