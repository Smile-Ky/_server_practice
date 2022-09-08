"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paging = exports.PAGING = exports.paging = exports.FAILURE = exports.NOTFOUND = exports.SUCCESS = void 0;
const SUCCESS = (data) => {
    return {
        result: 2001,
        data: data
    };
};
exports.SUCCESS = SUCCESS;
const NOTFOUND = (error) => {
    return {
        result: 4001,
        data: { error }
    };
};
exports.NOTFOUND = NOTFOUND;
const FAILURE = (error) => {
    return {
        result: 5001,
        data: { error }
    };
};
exports.FAILURE = FAILURE;
class paging {
}
exports.paging = paging;
const PAGING = (data) => data;
exports.PAGING = PAGING;
exports.Paging = {
    getPagingResult: (totalData, page, pageSize) => {
        function pages(_totalData, _page, _pageSize) {
            if (_page > Math.ceil(Number(_totalData) / _pageSize)) {
                return Math.ceil(Number(_totalData) / _pageSize);
            }
            return _page;
        }
        return {
            totalData: Number(totalData),
            totalPages: Math.ceil(Number(totalData) / pageSize),
            requestPage: pages(totalData, page, pageSize),
            requestSize: pageSize
        };
    },
    getPagingSQL: (totalData, page, pageSize) => {
        return `limit ${pageSize} offset ${(page - 1) * pageSize}`;
    },
    getOffset: (totalData, page, pageSize) => {
        if (Number(totalData) === 0) {
            return 0;
        }
        let buffer;
        if (page > Math.ceil(Number(totalData) / pageSize)) {
            buffer = Math.ceil(Number(totalData) / pageSize);
            return (buffer - 1) * pageSize;
        }
        else {
            return (page - 1) * pageSize;
        }
    },
    getMarketPaging: (totalData, page, pageSize, data) => {
        function pages(_totalData, _page, _pageSize) {
            if (_page > Math.ceil(Number(_totalData) / _pageSize) && totalData !== 0) {
                return Math.ceil(Number(_totalData) / _pageSize);
            }
            return _page;
        }
        function prev(_totalData, _page, _pageSize) {
            const _pages = pages(_totalData, _page, _pageSize);
            if (_page === 1) {
                return _page;
            }
            return _page - 1;
        }
        function next(_totalData, _page, _pageSize) {
            const _pages = pages(_totalData, _page, _pageSize);
            if (_pages < Math.ceil(Number(_totalData) / _pageSize)) {
                return _pages + 1;
            }
            else {
                return _pages;
            }
        }
        const pageList = Array.from({ length: Math.ceil(Number(totalData) / pageSize) }, (v, i) => i + 1);
        return {
            totalData: totalData,
            first_page: 1,
            prev_jump: 1,
            prev_page: prev(totalData, page, pageSize),
            cur_page: pages(totalData, page, pageSize),
            next_page: next(totalData, page, pageSize),
            next_jump: 1,
            last_page: Math.ceil(Number(totalData) / pageSize),
            per_page: pageSize,
            page_list: pageList,
            qry_str: data
        };
    }
};
//# sourceMappingURL=respones.js.map