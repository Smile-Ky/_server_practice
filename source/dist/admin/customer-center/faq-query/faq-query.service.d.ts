import { QueryFaqRepository } from "../../../repository/query/QueryFaq.repository";
import { ReqFAQDto } from "./DTO/ReqFAQ.dto";
import { QueryFaqEntity } from "../../../entity/query/QueryFaq.entity";
export declare class FaqQueryService {
    private queryFaqRepository;
    constructor(queryFaqRepository: QueryFaqRepository);
    find(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<QueryFaqEntity>;
    create(data: ReqFAQDto): Promise<QueryFaqEntity>;
    update(id: string, data: ReqFAQDto): Promise<void>;
    delete(id: string): Promise<void>;
}
