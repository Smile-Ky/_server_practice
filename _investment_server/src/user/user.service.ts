import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentRepository } from 'src/repository/investment.repository';
import { ProductRepository } from 'src/repository/product.repository';
import { UserRepository } from 'src/repository/user.repository';
import { userInvestDto } from './DTO/userInvest.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private userRepository : UserRepository,
        @InjectRepository(ProductRepository) private productRepository : ProductRepository,
        @InjectRepository(InvestmentRepository) private investmentRepository : InvestmentRepository
    ){}

    async findAll(user_id: number){
        try {
            return await this.productRepository.getUser(user_id)
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async addInvest(userInvest: userInvestDto){
        try {
            const investment = await this.productRepository.getInvest(userInvest.product_id)
            if(userInvest.investment + parseInt(investment[0].current_amount) > parseInt(investment[0].p_total_amount)){return 'sold-out'}{
                await this.userRepository.addInvest(userInvest)
                await this.userRepository.addHistory(userInvest)
                return
            }
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }

    async deleteInvest(user_id: number, product_id: number){
        try {
            return await this.investmentRepository.deleteInvest(user_id, product_id)
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}
