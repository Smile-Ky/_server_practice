"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resDelete = exports.resUpdate = exports.resCreate = exports.resSaveSequence = exports.resFindId = exports.resFindAll = void 0;
exports.resFindAll = {
    "result": 2001,
    "data": {
        "data": [
            {
                "top_display_list_id": "메인 전시 리스트 고유 ID",
                "sequence": "전시 리스트 순서 (value = 1)",
                "display_name": "메인 전시 리스트 타이틀",
                "start_date": "시작일",
                "end_date": "종료일",
                "is_show": "노출 여부 (노출 = 1 or 미노출 = 0)",
                "create_date": "생성일",
                "update_date": "수정일"
            }
        ]
    }
};
exports.resFindId = {
    "result": 2001,
    "data": {
        "data": {
            "display": {
                "top_display_list_id": "메인 전시 리스트 고유 ID",
                "sequence": '전시 리스트 순서 (value = 1)',
                "display_name": "메인 전시 리스트 타이틀",
                "start_date": "시작일",
                "end_date": "종료일",
                "is_show": "노출여부 (노출 = 1 or 미노출 = 0)",
                "is_date": "날짜 사용여부 (사용 = 1 or 미사용 = 0)",
                "create_date": "생성일",
                "update_date": "수정일"
            },
            "product": [
                {
                    "product_id": "상품 고유 ID",
                    "product_option_id": "상품 옵션 고유 ID",
                    "product_code": "상품 고유 코드",
                    "product_url": "상품 대표 이미지 URL",
                    "product_name": "상품 명",
                    "product_brand_name": "상품 브랜드 이름",
                    "product_price": '상품 정가',
                    "product_sale_price": "상품 판매가",
                    "product_sale_state": "판매상태 (일시품절=0 or 판매중=1 or 판매종료=2)",
                    "is_show": "노출여부 (노출 = 1 or 미노출 = 0)"
                }
            ]
        }
    }
};
exports.resSaveSequence = {
    "result": 2001,
    "data": {
        "data": [
            {
                "top_display_list_id": "메인 전시 리스트 고유 ID",
                "sequence": "전시 리스트 순서 (value = 1)",
                "display_name": "메인 전시 리스트 타이틀",
                "start_date": "시작일",
                "end_date": "종료일",
                "is_show": "노출 여부 (노출 = 1 or 미노출 = 0)",
                "create_date": "생성일",
                "update_date": "수정일"
            }
        ]
    }
};
exports.resCreate = {
    "result": 2001,
    "data": {
        "sequence": "상품 순서",
        "display_name": "메인 전시 리스트 타이틀",
        "is_show": "노출 여부 (true or false)",
        "is_date": "날짜 사용여부 (true or false)",
        "start_date": "시작일",
        "end_date": "종료일",
        "create_date": "생성일",
        "update_date": "수정일",
        "top_display_list_id": "메인 전시 리스트 고유  ID"
    }
};
exports.resUpdate = {
    "result": 2001,
    "data": {
        "data": "메인 전시 리스트 고유 ID"
    }
};
exports.resDelete = {
    "result": 2001,
    "data": {
        "data": "메인 전시 리스트 고유 ID"
    }
};
//# sourceMappingURL=top-display-list-response.js.map