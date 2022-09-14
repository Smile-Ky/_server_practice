import { Logger } from "@nestjs/common";
import { BookEntity } from "../entity/book.entity";
import { EntityRepository, Repository } from "typeorm";
import { createBookDto } from "src/book/create-book.dto";


@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity>{
    async findById(flight_uuid: string, phone: string){
        try{
            return await this.createQueryBuilder()
                .select([
                    `flight_uuid`,
                    `name`,
                    `phone`
             ])
                .andWhere(`flight_uuid like '%${flight_uuid}%'`)
                .andWhere(`phone like '%${phone}%'`)
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
            }
       }
    async createBook(body: createBookDto){
        try{
            return await this.createQueryBuilder()
                .insert()
                .into('bookList')
                .values([
                    { 
                        flight_uuid: `${body.flight_uuid}`,
                        name: `${body.name}`,
                        phone: `${body.phone}`
                    },
                ])
                .execute()
            }catch(error){
                Logger.error(error)
                throw error
        }
    }

    async deleteById(query: string){
        try{
            return await this.createQueryBuilder()
                .delete()
                .from('bookList')
                .where(`phone = '${query}'`)
                .execute()
        }catch(error){
            Logger.error(error)
            throw error
        }
    }
}