import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/user.repository';

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

    async addInvest(){}

}
