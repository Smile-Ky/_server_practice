import { KeywordRepository } from "../../../repository/keyword/Keyword.repository";
import { KeywordSearchRepository } from "../../../repository/keyword/KeywordSearch.repository";
import { ReqKeywordSaveOrderDTO } from "./DTO/ReqKeywordSaveOrderDTO";
export declare class MarketingKeywordService {
    private keywordRepository;
    private keywordSearchRepository;
    constructor(keywordRepository: KeywordRepository, keywordSearchRepository: KeywordSearchRepository);
    find(startDate: Date, endDate: Date, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    keywordFind(): Promise<{
        data: any;
    }>;
    keywordSave(keyword: string): Promise<{
        id: string;
        keyword: string;
        createAt: Date;
    }>;
    keywordSaveOrder(req: ReqKeywordSaveOrderDTO): Promise<string>;
    keywordUpdate(keywordId: string, keyword: string): Promise<string>;
    keywordDelete(keywordId: string): Promise<string>;
}
