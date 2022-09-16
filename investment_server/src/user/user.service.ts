import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/user.repository';
import { userInvestDto } from './DTO/userInvest.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private userRepository : UserRepository
    ){}

    async findAll(user_id: string){
        try {
            return await this.userRepository.findAll(user_id)
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    

    async addInvest(userInvest: userInvestDto){
        try {
            return await this.userRepository.addInvest(userInvest)

        //▪ 총 투자모집 금액(total_investing_amount)을 넘어서면 sold-out 상태를 응답합니다.
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

}
