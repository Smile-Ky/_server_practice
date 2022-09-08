export declare class ReqMemberUpdateDto {
    name: string;
    password: string;
    group_id: string;
    birth: string;
    gender: string;
    phone: string;
    email: string;
    is_sms: boolean;
    is_information: boolean;
    profile_image_url: string;
    member_address: Array<{
        address_id: string;
        address_number: string;
        address: string;
        address_detail: string;
    }>;
}
