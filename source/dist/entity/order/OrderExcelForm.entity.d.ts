import { BaseEntity } from "typeorm";
export declare class OrderExcelFormEntity extends BaseEntity {
    order_excel_form_id: string;
    form_name: string;
    form_type: string;
    personal_use_yn: boolean;
    data_start_row: number;
    form_selected: string;
}
