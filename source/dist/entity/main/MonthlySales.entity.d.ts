import { BaseEntity } from "typeorm";
export declare class MonthlySalesEntity extends BaseEntity {
    monthly_sales_id: string;
    log_date: Date;
    total_sales: number;
    create_date: Date;
    update_date: Date;
}
