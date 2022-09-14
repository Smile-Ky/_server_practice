import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from 'src/respository/book.repository';
import { createBookDto } from './create-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookRepository) private bookRepository : BookRepository
      ){}
      
      async findById(flight_uuid: string, phone: string) {
        try{
          return await this.bookRepository.findById(flight_uuid, phone);
        }catch(error){
          Logger.error(error)
          throw error
        }
      }

      async createBook(body: createBookDto) {
        try{
          return await this.bookRepository.createBook(body);
        }catch(error){
          Logger.error(error)
          throw error
        }
      }  

      async deleteById(query: string){
        try{
          return await this.bookRepository.deleteById(query);
        }catch(error){
          Logger.error(error)
          throw error
        }
      }
}
