import { BookEntity } from "../entity/book.entity";
import { Repository } from "typeorm";
import { createBookDto } from "src/book/create-book.dto";
export declare class BookRepository extends Repository<BookEntity> {
    findById(flight_uuid: string, phone: string): Promise<any>;
    createBook(body: createBookDto): Promise<import("typeorm").InsertResult>;
    deleteById(query: string): Promise<import("typeorm").DeleteResult>;
}
