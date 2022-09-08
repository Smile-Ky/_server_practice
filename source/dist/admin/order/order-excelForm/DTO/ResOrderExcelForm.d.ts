import { ReqOrderExcelFormRowDTO } from "./ReqOrderExcelFormRowDTO";
export declare class ResOrderExcelForm {
    form_id: string;
    form_name: string;
    form_type: Array<string>;
    data_start_row: number;
    personal_use_yn: boolean;
    form_selected: Array<ReqOrderExcelFormRowDTO>;
}
