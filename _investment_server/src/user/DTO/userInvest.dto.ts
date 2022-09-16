import { IsString } from 'class-validator';

export class userInvestDto {

    @IsString()
    user_id : string;

    @IsString()
    product_id : string;

    @IsString()
    investment : string;
}
