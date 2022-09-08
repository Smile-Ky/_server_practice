import { BookRepository } from 'src/respository/book.repository';
import { createBookDto } from './create-book.dto';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: BookRepository);
    findById(flight_uuid: string, phone: string): Promise<any>;
    createBook(body: createBookDto): Promise<import("typeorm").InsertResult>;
    deleteById(query: string): Promise<import("typeorm").DeleteResult>;
}
