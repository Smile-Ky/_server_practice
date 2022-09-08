export declare class ResUserFromDTO {
    member_id: string;
    create_date: Date;
    last_visit_date: Date;
    name: string;
    member_code: string;
    password: string;
    group_id: string;
    group_name: string;
    birth: string;
    gender: number;
    phone: string;
    email: string;
    is_sms: boolean;
    is_information: boolean;
    member_address: Array<{
        address_id: string;
        address_number: string;
        address: string;
        address_detail: string;
    }>;
}
