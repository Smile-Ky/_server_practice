import { BookService } from './book.service';
import { Response } from 'express';
import { createBookDto } from './create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findById(flight_uuid: string, phone: string, res: Response): Promise<Response<any, Record<string, any>>>;
    createBook(body: createBookDto, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteById(query: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
