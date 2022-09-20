import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) private productRepository : ProductRepository
      ){}
      
    async findAll(date : Date){
        try {
            return await this.productRepository.findAll(date);
        } catch (error) {
            Logger.error(error)
            throw error
        }
    }
}
