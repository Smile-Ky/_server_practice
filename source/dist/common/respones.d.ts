export declare const SUCCESS: (data: object) => {
    result: number;
    data: object;
};
export declare const NOTFOUND: (error: object | string) => {
    result: number;
    data: {
        error: string | object;
    };
};
export declare const FAILURE: (error: object | string) => {
    result: number;
    data: {
        error: string | object;
    };
};
export declare class paging {
    totalData: number;
    totalPages: number;
    requestPage: number;
    requestSize: number;
}
export declare const PAGING: (data: paging) => paging;
export declare const Paging: {
    getPagingResult: (totalData: any, page: any, pageSize: any) => {
        totalData: number;
        totalPages: number;
        requestPage: any;
        requestSize: any;
    };
    getPagingSQL: (totalData: any, page: any, pageSize: any) => string;
    getOffset: (totalData: any, page: any, pageSize: any) => number;
    getMarketPaging: (totalData: number, page: number, pageSize: number, data: object) => {
        totalData: number;
        first_page: number;
        prev_jump: number;
        prev_page: any;
        cur_page: any;
        next_page: any;
        next_jump: number;
        last_page: number;
        per_page: number;
        page_list: number[];
        qry_str: object;
    };
};
