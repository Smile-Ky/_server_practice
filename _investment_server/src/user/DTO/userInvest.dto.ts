import { IsNumber } from "class-validator";

export class userInvestDto {
    
    @IsNumber()
    user_id : number;

    @IsNumber()
    product_id : number;

    @IsNumber()
    investment : number;
}
